
// Dropdown menu
// Created: 01/2017
// Updated:
// Created for: Sous-menu principal

(function($) {

    'use strict';
	$.fn.menu_dropdown = function() {

        return this.each(function(index) {

            var app = $(this),
				current_section_text = app.find('[data-text="current-section"]'),
                target = $( app.data('target') ),
				class_active = 'active';

			function init(){

				if( target.find( '.' + class_active ).length > 0 ){
					$(this).addClass( class_active );
				}else {
					target.find( 'a' ).first().addClass( class_active );
				}

				current_section_text.append( target.find( '.' + class_active ).text() );

			}

			init();

        });
    }

})(jQuery);