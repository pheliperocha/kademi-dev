/**!
 * KEditor - Kademi content editor
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 0.0.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap (optional), FontAwesome (optional)
 */
/**
 * KEditor Button Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var edmEditor = $.edmEditor;
    var flog = KEditor.log;
    
    KEditor.components['button'] = {
        settingEnabled: true,
        
        settingTitle: 'Button Settings',
        
        settingFormHtml: (
            '<form class="form-horizontal">' +
            '    <div class="form-group">' +
            '       <div class="col-md-12">' +
            '           <label>Button color</label>' +
            '           <input type="text" value="" id="button-color" class="form-control button-color-picker" />' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '       <label for="button-border-radius" class="col-sm-12">Border Radius</label>' +
            '       <div class="col-sm-12">' +
            '           <input type="number" id="button-border-radius" class="form-control" />' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '       <div class="col-md-12">' +
            '           <label>Inner Padding (in px)</label>' +
            '           <div class="row row-sm text-center">' +
            '               <div class="col-xs-4 col-xs-offset-4">' +
            '                   <input type="number" value="" class="button-inner-padding form-control" data-css="padding-top" />' +
            '                   <small>top</small>' +
            '               </div>' +
            '           </div>' +
            '           <div class="row row-sm text-center">' +
            '               <div class="col-xs-4">' +
            '                   <input type="number" value="" class="button-inner-padding form-control" data-css="padding-left" />' +
            '                   <small>left</small>' +
            '               </div>' +
            '               <div class="col-xs-4 col-xs-offset-4">' +
            '                   <input type="number" value="" class="button-inner-padding form-control" data-css="padding-right" />' +
            '                   <small>right</small>' +
            '               </div>' +
            '           </div>' +
            '           <div class="row row-sm text-center">' +
            '               <div class="col-xs-4 col-xs-offset-4">' +
            '                   <input type="number" value="" class="button-inner-padding form-control" data-css="padding-bottom" />' +
            '                   <small>bottom</small>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '       <label for="button-text" class="col-sm-12">Text</label>' +
            '       <div class="col-sm-12">' +
            '           <input type="text" id="button-text" class="form-control" />' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group button-link">' +
            '       <label for="button-link" class="col-sm-12">Link</label>' +
            '       <div class="col-sm-12">' +
            '           <input type="text" id="button-link" class="form-control" />' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '       <div class="col-md-12">' +
            '           <label>Text color</label>' +
            '           <input type="text" value="" id="button-text-color" class="form-control button-color-text-picker" />' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '       <label for="button-font-size" class="col-sm-12">Font Size</label>' +
            '       <div class="col-sm-12">' +
            '           <input type="number" id="button-font-size" class="form-control" />' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '       <label for="button-font-family" class="col-sm-12">Font Family</label>' +
            '       <div class="col-sm-12">' +
            '           <select id="button-font-family" class="form-control">' +
            '               <option value="">None</option>' +
            '               <option value="arial,helvetica,sans-serif">Arial</option>' +
            '               <option value="comic sans ms,cursive">Comic Sans MS</option>' +
            '               <option value="courier new,courier,monospace">Courier New</option>' +
            '               <option value="lucida sans unicode,lucida grande,sans-serif">Lucida Sans Unicode</option>' +
            '               <option value="tahoma,geneva,sans-serif">Tahoma</option>' +
            '               <option value="times new roman,times,serif">Times New Roman</option>' +
            '               <option value="trebuchet ms,helvetica,sans-serif">Trebuchet MS</option>' +
            '               <option value="verdana,geneva,sans-serif">Verdana</option>' +
            '           </select>' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '       <label class="col-sm-12">Font Style</label>' +
            '       <div class="col-sm-12">' +
            '           <button type="button" class="btn btn-sm btn-default btn-style btn-bold" data-value="bold" data-prop="fontWeight" name="font-weight"><i class="fa fa-bold"></i></button>' +
            '           <button type="button" class="btn btn-sm btn-default btn-style btn-italic" data-value="italic" data-prop="fontStyle" name="font-style"><i class="fa fa-italic"></i></button>' +
            '       </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '       <label class="col-sm-12">Alignment</label>' +
            '       <div class="col-sm-12">' +
            '           <button type="button" class="btn btn-sm btn-default btn-align" data-value="left"><i class="fa fa-align-left"></i></button>' +
            '           <button type="button" class="btn btn-sm btn-default btn-align" data-value="center"><i class="fa fa-align-center"></i></button>' +
            '           <button type="button" class="btn btn-sm btn-default btn-align" data-value="right"><i class="fa fa-align-right"></i></button>' +
            '           <button type="button" class="btn btn-sm btn-default btn-align" data-value="full"><i class="fa fa-align-justify"></i></button>' +
            '       </div>' +
            '    </div>' +
            '</form>'
        ),
        
        initSettingForm: function (form, keditor) {
            flog('initSettingForm "button" component');
            
            form.append(this.settingFormHtml);
            
            form = form.find('form');
            edmEditor.initDefaultComponentControls(form, keditor);
            
            var buttonColorPicker = form.find('.button-color-picker');
            edmEditor.initSimpleColorPicker(buttonColorPicker, function (color) {
                var buttonWrapper = keditor.getSettingComponent().find('.button-wrapper');
                buttonWrapper.attr('bgcolor', color);
            });
            
            var txtBorderRadius = form.find('#button-border-radius');
            txtBorderRadius.on('change', function () {
                edmEditor.setStyles('border-radius', this.value + 'px', keditor.getSettingComponent().find('.button-wrapper'));
            });
            
            form.find('.button-inner-padding').each(function () {
                var input = $(this);
                var dataCss = input.attr('data-css');
                
                edmEditor.initPaddingControl(input, function (value) {
                    edmEditor.setStyles(dataCss, value, keditor.getSettingComponent().find('.button-inner'));
                });
            });
            
            var txtText = form.find('#button-text');
            txtText.on('change', function () {
                var text = this.value || '';
                text = text.trim();
                
                keditor.getSettingComponent().find('.button-wrapper a').text(text);
            });
            
            var txtLink = form.find('#button-link');
            txtLink.on('change', function () {
                var href = this.value || '';
                href = href.trim();
                
                keditor.getSettingComponent().find('.button-wrapper a').attr("href", href);
            });
            
            var buttonTextColorPicker = form.find('.button-color-text-picker');
            edmEditor.initSimpleColorPicker(buttonTextColorPicker, function (color) {
                var button = keditor.getSettingComponent().find('.button-wrapper a');
                edmEditor.setStyles('color', color, button);
            });
            
            var txtFontSize = form.find('#button-font-size');
            txtFontSize.on('change', function () {
                edmEditor.setStyles('font-size', (this.value > 0 ? this.value : 0) + 'px', keditor.getSettingComponent().find('.button-wrapper a'));
            });
            
            var cbbFontFamily = form.find('#button-font-family');
            cbbFontFamily.on('change', function () {
                edmEditor.setStyles('font-family', this.value, keditor.getSettingComponent().find('.button-wrapper a'));
            });
            
            form.find('.btn-style').each(function () {
                var btn = $(this);
                var name = btn.attr('data-prop');
                
                btn.on('click', function (e) {
                    e.preventDefault();
                    
                    var value = btn.attr('data-value');
                    if (btn.hasClass('active')) {
                        btn.removeClass('active');
                        value = '';
                    } else {
                        btn.addClass('active');
                    }
                    
                    keditor.getSettingComponent().find('.button-wrapper a').get(0).style[name] = value;
                });
            });
            
            var btnsAlign = form.find('.btn-align');
            btnsAlign.each(function () {
                var btn = $(this);
                var value = btn.attr('data-value');
                
                btn.on('click', function (e) {
                    e.preventDefault();
                    
                    if (!btn.hasClass('active')) {
                        var table = keditor.getSettingComponent().find('.button-wrapper');
                        
                        btnsAlign.removeClass('active');
                        btn.addClass('active');
                        
                        if (value === 'full') {
                            table.attr('width', '100%').attr('align', 'center');
                        } else {
                            table.removeAttr('width').attr('align', value);
                        }
                    }
                });
            });
        },
        
        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "button" component', component);
            
            edmEditor.showDefaultComponentControls(form, component, keditor);
            
            var buttonWrapper = component.find('.button-wrapper');
            var buttonInner = buttonWrapper.find('.button-inner');
            var button = buttonInner.find('a');
            
            var buttonColorPicker = form.find('.button-color-picker');
            buttonColorPicker.val(buttonWrapper.css('background-color') || '').trigger('update');
            
            var txtBorderRadius = form.find('#button-border-radius');
            var borderRadius = buttonWrapper.css('border-radius');
            txtBorderRadius.val(borderRadius ? borderRadius.replace('px', '') : '');
            
            form.find('.button-inner-padding').each(function () {
                var input = $(this);
                var propName = input.attr('data-prop');
                var value = buttonInner.get(0).style[propName];
                
                input.val(value ? value.replace('px', '') : '0');
            });
            
            var txtText = form.find('#button-text');
            txtText.val(button.text());
            
            var txtLink = form.find('#button-link');
            txtLink.val(button.attr("href"));
            
            var buttonTextColorPicker = form.find('.button-color-text-picker');
            buttonTextColorPicker.val(button.css('color') || '').trigger('update');
            
            var txtFontSize = form.find('#button-font-size');
            var fontSize = button.css('font-size');
            txtFontSize.val(fontSize ? fontSize.replace('px', '') : '');
            
            var cbbFontFamily = form.find('#button-font-family');
            cbbFontFamily.val(button.css('font-family').toLowerCase().replace(/,\s/g, ',').replace(/"/g, ''));
            
            var btnBold = form.find('.btn-bold');
            var fontWeight = button.css('font-weight');
            btnBold[fontWeight === '700' || fontWeight === 'bold' ? 'addClass' : 'removeClass']('active');
            
            var btnItalic = form.find('.btn-italic');
            btnItalic[button.css('font-style') === 'italic' ? 'addClass' : 'removeClass']('active');
            
            var align = buttonWrapper.attr('align');
            if (buttonWrapper.attr('width') === '100%') {
                align = 'full';
            }
            form.find('.btn-align').removeClass('active').filter('[data-value=' + align + ']').addClass('active');
        }
    };
    
})(jQuery);

/**
 * KEditor Line Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var edmEditor = $.edmEditor;
    var flog = KEditor.log;

    KEditor.components['line'] = {
        settingEnabled: true,

        settingTitle: 'Line Settings',

        initSettingForm: function (form, keditor) {
            flog('initSettingForm "line" component');
            form.append(
                '<form class="form-horizontal">' +
                '    <div class="form-group">' +
                '       <div class="col-md-12">' +
                '           <label>Color</label>' +
                '           <input type="text" value="" id="line-color" class="form-control" />' +
                '       </div>' +
                '    </div>' +
                '    <div class="form-group">' +
                '       <label for="line-height" class="col-sm-12">Width</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="line-width" class="form-control" />' +
                '       </div>' +
                '    </div>' +
                '    <div class="form-group">' +
                '       <label for="line-height" class="col-sm-12">Height</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="line-height" class="form-control" />' +
                '       </div>' +
                '    </div>' +
                '</form>'
            );
    
            form = form.find('form');
            edmEditor.initDefaultComponentControls(form, keditor);

            var lineHeight = form.find('#line-height');
            lineHeight.on('change', function () {
                keditor.getSettingComponent().find('.wrapper div').css('height', this.value);
            });

            var lineHeight = form.find('#line-width');
            lineHeight.on('change', function () {
                keditor.getSettingComponent().find('.wrapper table').attr('width', this.value);
            });
    
            var lineColorPicker = form.find('.line-color-picker');
            edmEditor.initSimpleColorPicker(lineColorPicker, function (color) {
                var wrapper = keditor.getSettingComponent().find('.wrapper');
                var div = wrapper.children('div');
    
                edmEditor.setStyles('background-color', color, div);
            });
        },

        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "line" component', component);

            var lineHeight = form.find('#line-height');
            var height = component.find('.wrapper div').css('height');
            lineHeight.val(height ? height.replace('px', '') : '0');

            var lineWidth = form.find('#line-width');
            var width = component.find('.wrapper table').attr('width');
            lineWidth.val(width ? width.replace('px', '') : '0');
            
            edmEditor.showDefaultComponentControls(form, component, keditor);

            var wrapper = component.find('.wrapper');
            var div = wrapper.children('div');
            var lineColorPicker = form.find('.line-color-picker');
            lineColorPicker.val(div.css('background-color') || '').trigger('update');
        }
    };

})(jQuery);

/**
 * KEditor Photo Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var edmEditor = $.edmEditor;
    var flog = KEditor.log;
    
    KEditor.components['photo'] = {
        init: function (contentArea, container, component, keditor) {
            flog('init "photo" component', component);
            
            var self = this;
            var img = component.find('img');
            self.adjustWidthForImg(img, img.hasClass('full-width'));
            
            var options = keditor.options;
            if (typeof options.onComponentReady === 'function') {
                options.onComponentReady.call(contentArea, component);
            }
        },
        
        settingEnabled: true,
        
        settingTitle: 'Photo Settings',
        
        initSettingForm: function (form, keditor) {
            flog('initSettingForm "photo" component');
            
            var self = this;
            
            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group photo-edit-wrapper">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary" id="photo-edit">Change Photo</button>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group photo-alt-wrapper">' +
                '       <label for="photo-alt" class="col-sm-12">Alt text</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="text" id="photo-alt" class="form-control" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-fullwidth" class="col-sm-12">Full width</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="photo-fullwidth" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-width" class="col-sm-12">Linkable</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="photo-linkable" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-height" class="col-sm-12">Link</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="text" id="photo-link" class="form-control" disabled="disabled" />' +
                '           <span class="help-block" style="display: none;">Link is invalid</span>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-height" class="col-sm-12">Open link in</label>' +
                '       <div class="col-sm-12">' +
                '           <select class="form-control" id="photo-target" disabled="disabled">' +
                '               <option value="" selected="selected">Current tab/window</option>' +
                '               <option value="_blank">New tab/window</option>' +
                '           </select>' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );
            
            var txtLink = form.find('#photo-link');
            txtLink.on('change', function () {
                var link = this.value.trim();
                var pattern = new RegExp('^[a-zA-Z0-9_/%:/./-]+$');
                var span = txtLink.next();
                var formGroup = txtLink.closest('.form-group');
                
                if (pattern.test(link)) {
                    keditor.getSettingComponent().find('a').attr('href', link);
                    span.hide();
                    formGroup.removeClass('has-error');
                } else {
                    span.show();
                    formGroup.addClass('has-error');
                }
            });
            
            var cbbTarget = form.find('#photo-target');
            cbbTarget.on('change', function () {
                keditor.getSettingComponent().find('a').attr('target', this.value);
            });
            
            var chkLinkable = form.find('#photo-linkable');
            chkLinkable.on('click', function () {
                var img = keditor.getSettingComponent().find('img');
                
                if (chkLinkable.is(':checked')) {
                    txtLink.prop('disabled', false);
                    cbbTarget.prop('disabled', false);
                    img.wrap('<a href="" style="text-decoration: none;"></a>');
                    img.css('border', '0');
                } else {
                    txtLink.prop('disabled', true);
                    cbbTarget.prop('disabled', true);
                    img.unwrap('a');
                }
            });
            
            var photoEdit = form.find('#photo-edit');
            photoEdit.mselect({
                contentTypes: ['image'],
                bs3Modal: true,
                pagePath: keditor.options.pagePath,
                basePath: keditor.options.basePath,
                onSelectFile: function (url, relativeUrl, fileType, hash) {
                    var img = keditor.getSettingComponent().find('img');
                    img.attr('src', "http://" + window.location.host + "/_hashes/files/" + hash);
                    self.adjustWidthForImg(img, true);
                }
            });
            
            var inputAlt = form.find('#photo-alt');
            inputAlt.on('change', function () {
                keditor.getSettingComponent().find('img').attr('alt', this.value);
            });
            
            var chkFullWidth = form.find('#photo-fullwidth');
            chkFullWidth.on('click', function () {
                var img = keditor.getSettingComponent().find('img');
                img[this.checked ? 'addClass' : 'removeClass']('full-width');
                self.adjustWidthForImg(img, this.checked);
            });
            
            form = form.find('form');
            edmEditor.initDefaultComponentControls(form, keditor, {
                onPaddingChanged: function (dataCss, value) {
                    if (dataCss === 'padding-left' || dataCss === 'padding-right') {
                        var img = keditor.getSettingComponent().find('img');
                        self.adjustWidthForImg(img, img.hasClass('full-width'));
                    }
                }
            });
        },
        
        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "photo" component', component);
            
            edmEditor.showDefaultComponentControls(form, component, keditor);
            
            var img = component.find('img');
            
            var inputAlt = form.find('#photo-alt');
            inputAlt.val(img.attr('alt') || '');
            
            var chkFullWidth = form.find('#photo-fullwidth');
            chkFullWidth.prop('checked', img.hasClass('full-width'));
            
            var txtLink = form.find('#photo-link');
            var cbbTarget = form.find('#photo-target');
            var chkLinkable = form.find('#photo-linkable');
            
            txtLink.next().hide();
            txtLink.closest('.form-group').removeClass('has-error');
            
            var a = img.parent('a');
            if (a.length > 0) {
                chkLinkable.prop('checked', true);
                txtLink.prop('disabled', false).val(a.attr('href'));
                cbbTarget.prop('disabled', false).val(a.attr('target'));
            } else {
                chkLinkable.prop('checked', false);
                txtLink.prop('disabled', true).val('');
                cbbTarget.prop('disabled', true).val('');
            }
        },
        
        adjustWidthForImg: function (img, isFullWidth) {
            flog('adjustWidthForImg', img, isFullWidth);
    
            img.css('display', 'none');
            
            $('<img />').attr('src', img.attr('src')).load(function () {
                var realWidth = this.width;
                var realHeight = this.height;
                var ratio = realWidth / realHeight;
                var wrapper = img.parent();
                if (wrapper.is('a')) {
                    wrapper = wrapper.parent();
                }
                var wrapperWidth = wrapper.width();
                img.attr({
                    width: isFullWidth ? wrapperWidth : realWidth,
                    height: isFullWidth ? wrapperWidth / ratio : realHeight
                });
                img.css('display', 'block');
            });
        },
        
        onWithChanged: function (component, width, keditor) {
            var self = this;
            
            var img = component.find('img');
            self.adjustWidthForImg(img, img.hasClass('full-width'));
        }
    };
    
})(jQuery);

/**
 * KEditor Spacer Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var edmEditor = $.edmEditor;
    var flog = KEditor.log;

    KEditor.components['spacer'] = {
        settingEnabled: true,

        settingTitle: 'Spacer Settings',

        initSettingForm: function (form, keditor) {
            flog('initSettingForm "spacer" component');
            form.append(
                '<form class="form-horizontal">' +
                '    <div class="form-group">' +
                '       <label for="spacer-height" class="col-sm-12">Height</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="spacer-height" class="form-control" />' +
                '       </div>' +
                '    </div>' +
                '</form>'
            );

            var spacerHeight = form.find('#spacer-height');
            spacerHeight.on('change', function () {
                keditor.getSettingComponent().find('.spacer').attr('height', this.value);
            });

            form = form.find('form');
            edmEditor.initDefaultComponentControls(form, keditor, {
                hidePadding: true
            });
        },

        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "spacer" component', component);

            var spacerHeight = form.find('#spacer-height');
            spacerHeight.val(component.find('.spacer').attr('height'));
    
            edmEditor.showDefaultComponentControls(form, component, keditor);
        }
    };

})(jQuery);

/**
 * KEditor Text Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var edmEditor = $.edmEditor;
    var flog = KEditor.log;

    CKEDITOR.disableAutoInline = true;
    CKEDITOR.isEDM = true;

    // Text component
    // ---------------------------------------------------------------------
    KEditor.components['text'] = {
        init: function (contentArea, container, component, keditor) {
            flog('init "text" component', component);

            var self = this;
            var options = keditor.options;

            var componentContent = component.children('.keditor-component-content');
            var textWrapper = componentContent.find('.text-wrapper');
            var textHtml = textWrapper.html();
            var editorDiv = $('<div class="text-editor" contenteditable="true"></div>').attr('id', keditor.generateId('text-editor')).html(textHtml);
            textWrapper.html(editorDiv);

            var editor = editorDiv.ckeditor(keditor.options.ckeditorOptions).editor;
            editor.on('instanceReady', function () {
                flog('CKEditor is ready', component);

                if (typeof options.onComponentReady === 'function') {
                    options.onComponentReady.call(keditor, component, editor, contentArea);
                }
            });

            editorDiv.on('input', function (e) {
                if (typeof options.onComponentChanged === 'function') {
                    options.onComponentChanged.call(keditor, e, component, contentArea);
                }

                if (typeof options.onContainerChanged === 'function') {
                    options.onContainerChanged.call(keditor, e, container, contentArea);
                }

                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(keditor, e, contentArea);
                }
            });
        },

        getContent: function (component, keditor) {
            flog('getContent "text" component', component);

            var componentContent = component.find('.keditor-component-content');
            var textWrapper = componentContent.find('.text-wrapper');
            var editorDiv = componentContent.find('.text-editor');
            var id = editorDiv.attr('id');
            var editor = CKEDITOR.instances[id];

            if (editor) {
                textWrapper.html(editor.getData());
            }

            return componentContent.html();
        },

        destroy: function (component, keditor) {
            flog('destroy "text" component', component);

            var id = component.find('.text-editor').attr('id');
            var editor = CKEDITOR.instances[id];
            if (editor) {
                editor.destroy();
            }
        },

        settingEnabled: true,

        settingTitle: 'Text Settings',

        initSettingForm: function (form, keditor) {
            flog('initSettingForm "text" component');
            form.append(
                '<form class="form-horizontal">' +
                '</form>'
            );

            form = form.find('form');
            edmEditor.initDefaultComponentControls(form, keditor);
        },

        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "text" component', component);
    
            edmEditor.showDefaultComponentControls(form, component, keditor);
        }
    };

})(jQuery);
