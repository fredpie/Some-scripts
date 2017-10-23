
// Link internal(scrollto)
// Created: 02/2017
// Updated:
// Created for: Footer back to top button
// Required: Revealizr

(function($) {

	'use strict';
	$.fn.link_internal = function() {

		return this.each(function(index) {

			var $app = $(this);

			$app.on(Revealizr.clickORtouchend, function(event) {

				event.preventDefault();
				var id = $(this).attr("href"),
					$target = $( id ),
					pos_modifier = 0;

				if( Revealizr.isTabletSize ){
					pos_modifier = 0;
				}
				else if( Revealizr.isDesktopSize ){
					pos_modifier = 0;
				}
				var scroll_value = ( $target.offset() != undefined )? $target.offset().top - pos_modifier : 0;

				$('html, body').animate({
					scrollTop: scroll_value
				}, '300', focus);

				function focus() {

					if( $target.attr('tabindex') == undefined ) {
						$target.attr('tabindex', 0).focus();
					}elseÂ {
						$target.focus();
					}

				}

			});
		});
	}

})(jQuery);