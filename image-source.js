// Images source
// Created: 11/2016
// Updated: -


// support breakpoint for images in a grid one/third or two/third

(function($) {

	$.fn.image_source = function() {
		return this.each(function() {
			var $image = $(this);

			function update_src() {
				if ($image.closest('.column-two-third').length > 0 ) {
					$image.attr("src", $image.data("source-tablet"));
				} else if ($image.closest('.column-one-third').length > 0 ) {
			  		$image.attr("src", $image.data("source-mobile"));
				} else if(Revealizr.isMobileSize) {
					$image.attr("src", $image.data("source-mobile"));
				} else if(Revealizr.isTabletSize) {
			        $image.attr("src", $image.data("source-tablet"));
			    } else if(Revealizr.isDesktopSize) {
			        $image.attr("src", $image.data("source-desktop"));
			    }
			}

		update_src();

			$(window).on(Revealizr.resizeORorientation, _.throttle(function (){
				"use strict";
					update_src();
			}, 200));
		});
	}
})(jQuery);