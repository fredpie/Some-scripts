// Select custom
// Created: 03/2017
// Updated: -
// Created for: page contact us

(function ($) {

	'use strict';
	$.fn.select_custom = function () {

		return this.each(function (index) {

			var $select = $(this),
				select_id = $select.attr('id'),
				$label = $('[for="' + select_id + '"]'),
				$select_wrapper = $(' <div class="select-custom" /> '),
				$options = $select.find('option'),
				$option_current,
				options_nb = $select.find('option').length,
				option_default_index = ($select.find('option[selected]').index() !== -1) ? $select.find('option[selected]').index() : 0,
				$form = $select.closest('form'),
				$select_trigger,
				$options_custom,
				$option_custom_current,
				option_index_val,
				class_active = 'is-active';

			if( Revealizr.deviceType === 'touch' ) {
				$select_wrapper = $select;
			}

			// update the real SELECT and custom SELECT to the chosen value
			function update_selected_option(option_index) {

				if( Revealizr.deviceType === 'no-touch'  ){
					option_index_val = option_index;
					$options.removeAttr('selected');
					$option_current = $options.eq(option_index),
					$option_custom_current = $options_custom.eq(option_index);
					$select_trigger.text($option_current.text());
					$option_current.attr('selected', 'selected');
					$select.val($option_current.val());

					var is_invalid = ( $select.hasClass( 'error' ) )? true : false;
				}

				if( is_invalid ){
					$select_wrapper.addClass('is-invalid');
				}

				if (option_default_index !== option_index) {
					$select_wrapper.addClass('js-option-selected');
				} else if( option_default_index !== 0 ) {
					$select_wrapper.addClass('js-option-selected');
				} else {
					$select_wrapper.removeClass('js-option-selected');
				}
			}

			// Create the custom select HTML with the default value
			function init() {

				$select.wrap($select_wrapper);


				$select_wrapper = $select.closest('.select-custom');

				var $select_custom = $('<ul class="sc__options" role="listbox"></ul>');

				for (var i = 0; i < options_nb; i++) {
					var option_current = $options.eq(i);

					$select_custom.append('<li><button type="button" role="option" class="sc__option" data-value="' + option_current.val() + '">' + option_current.text() + '</button></li>');
				}

				$select.after($select_custom);
				$select.after('<button id="' + select_id + '-select" role="listbox" aria-expanded="false" class="sc__trigger" type="button"></button>');
				$select_trigger = $select_wrapper.find('.sc__trigger');
				$options_custom = $select_wrapper.find('.sc__option');
				update_selected_option(option_default_index);
				$label.attr('for', select_id + '-select');

				// When user click on the custom select
				$select_trigger.on(Revealizr.clickORtouchend, function (event) {
					$select_wrapper.toggleClass(class_active);
					$select_wrapper.find('li').first().children().focus();
				});

				$options_custom.on(Revealizr.clickORtouchend, function (event) {
					close();

					update_selected_option($(this).parent().index());
				});

				$select_wrapper.on('keydown.select', _.throttle(function (event) {

					if ($select_wrapper.hasClass('is-active')) {
						if (event.which == 27) {
							close();
						}

						// arrow up
						if (event.which == 38) {
							$(document.activeElement).parent().prev().children().focus();
						}

						// arrow down
						if (event.which == 40) {
							$(document.activeElement).parent().next().children().focus();
						}
					} else {
						// arrow up
						if (event.which == 38) {
							update_selected_option($select.find('option[selected]').prev().index());
						}

						// arrow down
						if (event.which == 40) {
							update_selected_option($select.find('option[selected]').next().index());
						}
					}

					// prevent scroll on the website while the navigating in the select
					$(window).on('keydown.scroll-select', function (event) {
						// arrow up
						if (event.keyCode == 38) {
							event.preventDefault();
						}

						// arrow down
						if (event.keyCode == 40) {
							event.preventDefault();
						}
					});

				}, 200));

				$select.on('change', function () {
					close();
				});

				$form.on('reset', function () {
					close();
					update_selected_option(option_default_index);
				});
			}


			// close custom select
			function close() {
				$select_wrapper.removeClass(class_active);
				$select_trigger.focus();
				$(window).off('keydown.scroll');
			}

			if( Revealizr.deviceType === 'no-touch'  ){
				init();
			} else {
				
				$select.on('change', function (event) {
					update_selected_option(this.selectedIndex);
				});
			}

		});
	}

})(jQuery);