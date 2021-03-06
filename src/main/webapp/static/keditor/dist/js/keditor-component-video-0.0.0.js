/**!
 * KEditor - Kademi content editor
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 0.0.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap (optional), FontAwesome (optional)
 */
/**
 * KEditor Video Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['video'] = {
        init: function (contentArea, container, component, keditor) {
            flog('init "video" component', component);

            var self = this;

            var img = component.find('img[data-video-src]');
            img.attr('id', keditor.generateId('component-video'));

            var wrapper = img.parent();
            if (!wrapper.hasClass('video-wrapper')) {
                img.wrap('<div class="video-wrapper"></div>');
                wrapper = img.parent();
            }

            wrapper.attr('data-id', img.attr('id'));
            wrapper.attr('data-autostart', img.attr('data-autostart'));
            wrapper.attr('data-aspectratio', img.attr('data-aspectratio'));
            wrapper.attr('data-video-src', img.attr('data-video-src'));
            wrapper.attr('data-repeat', img.attr('data-repeat'));
            wrapper.attr('data-controls', img.attr('data-controls'));

            $.getScriptOnce('/static/jwplayer/6.10/jwplayer.js', function () {
                jwplayer.key = 'cXefLoB9RQlBo/XvVncatU90OaeJMXMOY/lamKrzOi0=';
                self.buildJWVideoPlayerPreview(component);
            });
        },

        getContent: function (component) {
            flog('getContent "video" component, component');

            var wrapper = component.find('.video-wrapper');
            var html = '<img class="video-jw" ';
            html += '       id="' + this.componentId + '" ';
            html += '       src="' + wrapper.attr('data-video-src') + '/alt-640-360.png" ';
            html += '       data-autostart="' + wrapper.attr('data-autostart') + '" ';
            html += '       data-aspectratio="' + wrapper.attr('data-aspectratio') + '" ';
            html += '       data-video-src="' + wrapper.attr('data-video-src') + '" ';
            html += '       data-repeat="' + wrapper.attr('data-repeat') + '" ';
            html += '       data-controls="' + wrapper.attr('data-controls') + '" />';
            wrapper.html(html);

            return component.find('.keditor-component-content').html();
        },

        settingEnabled: true,

        settingTitle: 'Video Settings',

        initSettingForm: function (form, keditor) {
            flog('init "video" settings', form);
            var self = this;

            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <div class="video-toolbar">' +
                '               <a href="#" class="btn-videoFileInput btn btn-sm btn-primary btn-block"><i class="fa fa-upload"></i> Change your video</a>' +
                '               <input id="videoFileInput" type="file" style="display: none">' +
                '           </div>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="video-autoplay" class="col-sm-12">Autoplay</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="video-autoplay" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="video-loop" class="col-sm-12">Repeat</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="video-loop" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="video-showcontrols" class="col-sm-12">Show Controls</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="video-showcontrols" checked />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="" class="col-sm-12">Ratio</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="radio" name="video-radio" class="video-ratio" value="4:3" checked /> 4:3' +
                '       </div>' +
                '       <div class="col-sm-12">' +
                '           <input type="radio" name="video-radio" class="video-ratio" value="16:9" /> 16:9' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="" class="col-sm-12">Enable border</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" class="chk-border" value="" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="" class="col-sm-12">Border color</label>' +
                '       <div class="col-sm-12">' +
                '           <div class="input-group color-picker">' +
                '               <span class="input-group-addon"><i></i></span>' +
                '               <input type="text" value="" class="txt-border-color form-control" disabled />' +
                '           </div>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="" class="col-sm-12">Border width</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" class="border-width form-control" disabled />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="" class="col-sm-12">Border style</label>' +
                '       <div class="col-sm-12">' +
                '           <select class="form-control select-border-style selectpicker" disabled title=" - Select Border Style - ">' +
                '               <option data-content="<div class=border-style-solid></div>" value="solid">Solid</option>' +
                '               <option data-content="<div class=border-style-dotted></div>" value="dotted">Dotted</option>' +
                '               <option data-content="<div class=border-style-dashed></div>" value="dashed">Dased</option>' +
                '               <option data-content="<div class=border-style-double></div>" value="double">Double</option>' +
                '           </select>' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );

            var selectPicker = form.find('.select-border-style');
            selectPicker.selectpicker().on('changed.bs.select', function () {
                self.borderStyle = this.value;
                keditor.getSettingComponent().find('.video-wrapper').css('border-style', this.value);
            });

            var txtBorderWidth = form.find('.border-width');
            txtBorderWidth.on('change', function () {
                var width = this.value;
                if (isNaN(width) || width < 0) {
                    width = 1;
                    this.value = width;
                }

                self.borderWidth = width;
                keditor.getSettingComponent().find('.video-wrapper').css('border-width', width);
            });

            var colorPicker = form.find('.color-picker');
            var input = colorPicker.find('input');
            var previewer = colorPicker.find('.input-group-addon i');
            colorPicker.colorpicker({
                format: 'hex',
                container: colorPicker.parent(),
                component: '.input-group-addon',
                align: 'left',
                colorSelectors: {
                    'transparent': 'transparent'
                }
            }).on('changeColor.colorpicker', function (e) {
                var colorHex = e.color.toHex();

                if (!input.val() || input.val().trim().length === 0) {
                    colorHex = '';
                    previewer.css('background-color', '');
                }

                self.borderColor = colorHex;
                keditor.getSettingComponent().find('.video-wrapper').css('border-color', colorHex);
            });

            form.find('.chk-border').on('click', function () {
                selectPicker.prop('disabled', !this.checked).selectpicker('refresh');
                txtBorderWidth.prop('disabled', !this.checked);
                colorPicker.colorpicker(this.checked ? 'enable' : 'disable');

                if (!this.checked) {
                    keditor.getSettingComponent().find('.video-wrapper').css('border', '');
                    selectPicker.selectpicker('val', '');
                    txtBorderWidth.val('');
                    colorPicker.colorpicker('setValue', 'transparent');
                }
            });

            var btnVideoFileInput = form.find('.btn-videoFileInput');
            btnVideoFileInput.mselect({
                contentTypes: ['video'],
                bs3Modal: true,
                pagePath: window.location.pathname.replace('contenteditor', ''),
                onSelectFile: function (url) {
                    keditor.getSettingComponent().find('.video-wrapper').attr('data-video-src', url);
                    self.refreshVideoPlayerPreview(keditor);
                }
            });

            var autoplayToggle = form.find('#video-autoplay');
            autoplayToggle.on('click', function () {
                keditor.getSettingComponent().find('.video-wrapper').attr('data-autostart', this.checked);
                self.buildJWVideoPlayerPreview(keditor);
            });

            var loopToggle = form.find('#video-loop');
            loopToggle.on('click', function () {
                keditor.getSettingComponent().find('.video-wrapper').attr('data-repeat', this.checked);
                self.buildJWVideoPlayerPreview(keditor);
            });

            var ratio = form.find('.video-ratio');
            ratio.on('click', function (e) {
                if (this.checked) {
                    keditor.getSettingComponent().find('.video-wrapper').attr('data-aspectratio', this.value);
                    self.buildJWVideoPlayerPreview(keditor);
                }
            });

            var showcontrolsToggle = form.find('#video-showcontrols');
            showcontrolsToggle.on('click', function (e) {
                keditor.getSettingComponent().find('.video-wrapper').attr('data-controls', this.checked);
                self.buildJWVideoPlayerPreview(keditor);
            });
        },

        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "video" component', form, component);

            var wrapper = component.find('.video-wrapper');
            var borderWidth = wrapper.css('border-width') || '';
            var isBorderEnabled = borderWidth !== '0px';

            var chkBorder = form.find('.chk-border');
            var txtBorderWidth = form.find('.border-width');
            var colorPicker = form.find('.color-picker');
            var selectPicker = form.find('.select-border-style');

            chkBorder.prop('checked', isBorderEnabled);
            selectPicker.prop('disabled', !isBorderEnabled).selectpicker('refresh').selectpicker('val', wrapper.css('border-style'));
            txtBorderWidth.prop('disabled', !isBorderEnabled).val(isBorderEnabled ? borderWidth.replace('px', '') : '');
            colorPicker.colorpicker(isBorderEnabled ? 'enable' : 'disable').colorpicker('setValue', isBorderEnabled ? wrapper.css('border-color') : '');

            form.find('#video-autoplay').prop('checked', wrapper.attr('data-autostart') === 'true');
            form.find('#video-loop').prop('checked', wrapper.attr('data-repeat') === 'true');
            form.find('.video-ratio').filter('[value="' + wrapper.attr('data-aspectratio') + '"]').prop('checked', true);
            form.find('#video-showcontrols').prop('checked', wrapper.attr('data-controls') === 'true');
        },

        buildJWVideoPlayerPreview: function (component) {
            if (!component.jquery) {
                component = component.getSettingComponent();
            }
            var wrapper = component.find('.video-wrapper');
            var src = wrapper.attr('data-video-src');
            var autostart = wrapper.attr('data-autostart');
            var repeat = wrapper.attr('data-repeat');
            var aspectratio = wrapper.attr('data-aspectratio');
            var controls = wrapper.attr('data-controls');
            var playerInstance = jwplayer(wrapper.attr('data-id'));
            var posterHref = src + '/alt-640-360.png';

            flog("buildJWPlayer", src, "aspectratio=", aspectratio);
            playerInstance.setup({
                autostart: autostart,
                repeat: repeat,
                controls: controls,
                aspectratio: aspectratio,
                flashplayer: "/static/jwplayer/6.10/jwplayer.flash.swf",
                html5player: "/static/jwplayer/6.10/jwplayer.html5.js",
                width: "100%",
                androidhls: true, //enable hls on android 4.1+
                playlist: [{
                    image: posterHref,
                    sources: [{
                        file: src
                    }
                        , {
                            file: src + "/../alt-640-360.webm"
                        }, {
                            file: src + "/../alt-640-360.m4v"
                        }]
                }]
                , primary: "flash"
            });

            playerInstance.onReady(function () {
                flog('jwplayer preview init done');
            });
        },

        refreshVideoPlayerPreview: function (keditor) {
            var wrapper = keditor.getSettingComponent().find('.video-wrapper');
            var playerInstance = jwplayer(wrapper.attr('data-id'));
            var src = wrapper.attr('data-video-src');

            playerInstance.load([{
                file: src
            }]);
            playerInstance.play();
        }
    };
})(jQuery);
