var win = $(window);

function doPostMessage(data, url) {
    flog('doPostMessage', data);

    data.from = 'keditor';
    var dataStr = JSON.stringify(data);
    window.parent.postMessage(dataStr, url);
}

function initContentEditorPage(fileName) {
    flog('initContentEditorPage', fileName);

    var body = $(document.body);
    var url = getParam('url') || '';
    if (url && url !== 'undefined') {
        body.addClass('embedded-iframe');
        doPostMessage({
            url: window.location.href.split('#')[0]
        }, url);
    } else {
        win.on({
            keydown: function (e) {
                if (e.ctrlKey && e.keyCode === keymap.S) {
                    e.preventDefault();
                    $('.btn-save-file').trigger('click');
                }
            }
        });

        window.onbeforeunload = function (e) {
            if (body.hasClass('content-changed')) {
                e.returnValue = 'Are you sure you would like to leave the editor? You will lose any unsaved changes';
            }
        };
    }
    var timer;
    win.on('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            $('#content-area .keditor-content-area').css('min-height', win.height() - +body.css('padding-top').replace('px', ''));
        }, 100);
    }).trigger('resize');

    initKEditor(body, fileName);
    initSaving(body, fileName);

    setTimeout(function () {
        hideLoadingIcon();
    }, 200);
}

$.keditor.components['text'].options = {
    skin: editorSkin,
    allowedContent: true, // DISABLES Advanced Content Filter. This is so templates with classes are allowed through
    bodyId: 'editor',
    templates_files: [templatesPath],
    templates_replaceContent: false,
    toolbarGroups: toolbarSets['Default'],
    extraPlugins: 'embed_video,fuse-image,sourcedialog',
    removePlugins: standardRemovePlugins + ',autogrow,magicline,showblocks',
    removeButtons: 'Find,Replace,SelectAll,Scayt',
    enterMode: 'P',
    forceEnterMode: true,
    filebrowserBrowseUrl: '/static/fckfilemanager/browser/default/browser.html?Type=Image&Connector=/fck_connector.html',
    filebrowserUploadUrl: '/uploader/upload',
    format_tags: 'p;h1;h2;h3;h4;h5;h6', // removed p2
    format_p2: {
        element: 'p',
        attributes: {
            'class': 'lessSpace'
        }
    },
    minimumChangeMilliseconds: 100,
    stylesSet: 'myStyles:' + stylesPath
};

function initKEditor(body, fileName) {
    var contentArea = $('#content-area');

    contentArea.keditor({
        snippetsUrl: '_components?fileName=' + fileName,
        onContentChanged: function () {
            if (contentArea.keditor('getContent').trim() === '') {
                contentArea.find('.keditor-content-area').addClass('empty');
            } else {
                contentArea.find('.keditor-content-area').removeClass('empty');
            }

            if (!body.hasClass('content-changed')) {
                body.addClass('content-changed');
            }
        },
        onInitContentArea: function (contentArea) {
            var content = contentArea.html() || '';

            if (content === '') {
                contentArea.addClass('empty');
            }
        }
    });
}

function getParam(name) {
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var value = regex.exec(window.location.href) || '';
    value = decodeURIComponent(value[1]);

    return value;
}

function initSaving(body, fileName) {
    flog('initSaving', fileName);

    var isEmbeddedIframe = body.hasClass('embedded-iframe');
    var btnSaveFile = $('.btn-save-file');
    var parentUrl;
    var pageName;
    var postMessageData;
    if (isEmbeddedIframe) {
        win.on('message', function (e) {
            flog('On got message', e, e.originalEvent);

            postMessageData = $.parseJSON(e.originalEvent.data);
            if (postMessageData.triggerSave) {
                btnSaveFile.trigger('click');
            }
        });
    }

    btnSaveFile.on('click', function (e) {
        e.preventDefault();

        showLoadingIcon();
        var fileContent = $('#content-area').keditor('getContent');
        var saveUrl = postMessageData && postMessageData.pageName ? postMessageData.pageName : fileName;

        $.ajax({
            url: saveUrl,
            type: 'POST',
            data: {
                body: fileContent
            },
            success: function () {
                if (isEmbeddedIframe) {
                    doPostMessage({
                        isSaved: true,
                        resp: postMessageData.resp,
                        willClose: postMessageData.willClose
                    }, postMessageData.url);
                } else {
                    Msg.success('File is saved!');
                }

                hideLoadingIcon();
                body.removeClass('content-changed');
            },
            error: function (e) {
                Msg.error(e.status + ': ' + e.statusText);
                hideLoadingIcon();
            }
        })
    });
}

function hideLoadingIcon() {
    $('#editor-loading').addClass('hide');
}

function showLoadingIcon() {
    $('#editor-loading').removeClass('hide');
}
