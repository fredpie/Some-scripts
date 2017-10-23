
/*!
 * Revealizr - Detect features v2.0.0
 *
 * Plugin combinant la librairie Modernizr et l'extension Detectizr,
 * en plus de manipulations personnalisÃ©e pour rÃ©cupÃ©rer les dÃ©tails du navigateur
 *
 * Navigateurs supportÃ©s : IE 10+, Tous les autres
 *
 * Licensed MIT
 */
var Revealizr = Revealizr || {};
(function(window, document, $) {
    "use strict";

    window.Revealizr = function() {
        var app = this;

        /*
         Ajout de class possible dans le HTML:
         - desktop-size
         - tablet-size
         - mobile-size
         - server-dev
         - server-int
         - server-qa
         - server-tac
         - egc
         - egc-content
         */

        // DÃ©claration des variables

        // first load
        app.isDetectFeatureFirstLoad = true;

        // device and breakpoints
        app.isTabletDevice = false;
        app.isTabletSize = false;
        app.isMobileDevice = false;
        app.isMobileSize = false;
        app.isDesktopDevice = false;
        app.isDesktopSize = false;
        app.isBrowserAndroid = false;
        app.isBrowserMac = false;
        app.isBrowserBlackberryMobile = false;
        app.deviceType = 'no-touch';
        //app.isTouchEventsSupported = false;

        // events
        app.resizeORorientation = '';
        app.clickORtouchend = '';
        app.swiping = false;

        // EGC CMS TINK
        app.isCmsEgc = false;
        app.isCmsEgcContent = false;

        // serrvers
        app.server = '';

        app.currentViewportSize = '';
        app.lastViewportSize = '';
		app.viewportWidth = window.innerWidth;
		app.viewportHeight = window.innerHeight;
        app.windowOrientation = '';

        app.breakpointMobileMaxWidth = '767';
        app.breakpointTabletMaxWidth = '1023';
        app.breakpointDesktopMinWidth = '1024';

        app.nativeAndroidMinimumChromeVersion = 40; // Version minimum du Chrome qu'utilise le navigateur natif d'Android

        // SÃ©lecteurs
        app.$html = document.querySelector('html');
        app.$href = document.location.href;
        app.$objAgent = navigator.userAgent;
        app.$objFullVersion = ''+parseFloat(navigator.appVersion);

        // Valeurs
        app.htmlClasses = app.$html.getAttribute('class');

        // Fonctions
        app.hasClass = function(selector, classToCheck) {
            return selector.classList.contains(classToCheck);
        };

        app.detectFeatures = function() {
            "use strict";

            // Tableau d'ajout et de supression de classes dans la balise HTML
            app.arrayHtmlAdd = [];
            app.arrayHtmlRemove = [];

            /*
             * Lectures et vÃ©rifications
             */

            // VÃ©rification du device
            if( app.hasClass(app.$html, 'desktop') ) {
                app.isDesktopDevice = true;
                app.isTabletDevice = false;
                app.isMobileDevice = false;
            }
            else if( app.hasClass(app.$html, 'tablet') ) {
                app.isDesktopDevice = false;
                app.isTabletDevice = true;
                app.isMobileDevice = false;
            }
            else if( app.hasClass(app.$html, 'mobile') ) {
                app.isDesktopDevice = false;
                app.isTabletDevice = false;
                app.isMobileDevice = true;
            }

            // VÃ©rification du breakpoint
            if( Modernizr.mq('only all and (max-width: ' + app.breakpointMobileMaxWidth + 'px)') ) {
                app.isMobileSize = true;
                app.isTabletSize = false;
                app.isDesktopSize = false;
                app.arrayHtmlAdd.push('mobile-size');
                app.arrayHtmlRemove.push('tablet-size');
                app.arrayHtmlRemove.push('desktop-size');
            }
            else if( Modernizr.mq('only all and (max-width: ' + app.breakpointTabletMaxWidth + 'px)') ) {
                app.isMobileSize = false;
                app.isTabletSize = true;
                app.isDesktopSize = false;
                app.arrayHtmlRemove.push('mobile-size');
                app.arrayHtmlAdd.push('tablet-size');
                app.arrayHtmlRemove.push('desktop-size');
            }
            else if( Modernizr.mq('only all and (min-width: ' + app.breakpointDesktopMinWidth + 'px)') ){
                app.isMobileSize = false;
                app.isTabletSize = false;
                app.isDesktopSize = true;
                app.arrayHtmlRemove.push('mobile-size');
                app.arrayHtmlRemove.push('tablet-size');
                app.arrayHtmlAdd.push('desktop-size');
            }

            // Si l'on n'est pas au premier chargement de la fonction detectFeatures(),
            // rÃ©cupÃ©ration du dernier -viewport size-
            if( app.isDetectFeatureFirstLoad === false ) {
                app.lastViewportSize = app.currentViewportSize;
            }

            // Ensuite, vÃ©rification du -viewport size- en cours
            if( app.isMobileSize ) {
                app.currentViewportSize = 'mobile-size';
            }
            else if( app.isTabletSize ) {
                app.currentViewportSize = 'tablet-size';
            }
            else if( app.isDesktopSize ) {
                app.currentViewportSize = 'desktop-size';
            }

            // VÃ©rification de l'orientation du device
            if( app.viewportHeight > app.viewportWidth ){
                app.windowOrientation = 'portrait';
				app.arrayHtmlAdd.push('viewport-portrait');
				app.arrayHtmlRemove.push('viewport-landscape');
            }else {
                app.windowOrientation = 'landscape';
				app.arrayHtmlAdd.push('viewport-landscape');
				app.arrayHtmlRemove.push('viewport-portrait');
            }

            // VÃ©rification si l'on est sur Blackberry Mobile
            //
            if( ( app.hasClass(app.$html, 'blackberry') || app.hasClass(app.$html, 'blackberry10') ) && app.hasClass(app.$html, 'smallscreen') ) {
                app.isBrowserBlackberryMobile = 'true';
                app.arrayHtmlAdd.push('mobile');
                app.arrayHtmlRemove.push('tablet');
            }

            // VÃ©rification si l'on est sur Android
            if ( app.hasClass(app.$html, 'android') ){
                app.isBrowserAndroid = true;
            }

            // VÃ©rification si l'on est sur Apple Mac
            if ( app.hasClass(app.$html, 'mac') ){
                app.isBrowserMac = true;
            }

            // VÃ©rification si l'on est sur l'EGC (CMS)
            if ( app.$href.indexOf('/site-web/') > -1 ) {
                app.isCmsEgc = true;
                app.arrayHtmlAdd.push('egc');
            }
            if ( app.$href.indexOf('mode=content') > -1 ) {
                app.isCmsEgcContent = true;
                app.arrayHtmlAdd.push('egc-content');
            }

            // VÃ©rification si nous sommes en DEV
            if ( app.$href.indexOf('local.') > -1 || app.$href.indexOf('localhost') > -1 || app.$href.indexOf('.s2i.com') > -1 ) {
                app.server = 'dev';
                app.arrayHtmlAdd.push('server-dev');
            }

            // VÃ©rification si nous sommes en INT
            if ( app.$href.indexOf('.tinkint') > -1 ) {
                app.server = 'int';
                app.arrayHtmlAdd.push('server-int');
            }

            // VÃ©rification si nous sommes en QA
            if ( app.$href.indexOf('.tinkqa') > -1 ) {
                app.server = 'qa';
                app.arrayHtmlAdd.push('server-qa');
            }

            // VÃ©rification si nous sommes en TAC
            if ( app.$href.indexOf('.tinktac') > -1 ) {
                app.server = 'tac';
                app.arrayHtmlAdd.push('server-tac');
            }

            // VÃ©rification si le device/navigateur supporte les -Touch Events-
            /*if ( app.hasClass(app.$html, 'touchevents') ) {
                app.isTouchEventsSupported = true;
            }*/

            // (typeof el.ongesturestart == "function")
            if( ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0) ) {
                app.deviceType = 'touch';
            }

            // DÃ©tection Ã  savoir si on utilise -touchend- ou -click- et -resize- ou -orientationchange-
            if( ( app.isMobileDevice || app.isTabletDevice ) && !app.isTouchEventsSupported ) {
                app.resizeORorientation = 'orientationchange';
                app.clickORtouchend = 'touchend';
            }
            else {
                app.resizeORorientation = 'resize';
                app.clickORtouchend = 'click';
            }


            /*
             * VÃ©rification si l'on est sur le navigateur natif d'Android
             * Comme le navigateur natif d'Android est basÃ© sur une version antÃ©rieur de Chrome ou Safari,
             * il faut le dÃ©tecter pour permettre une facilitÃ© de dÃ©boguage du navigateur
             */

            // Si le navigateur natif d'Android utilise "Chrome"
            if( (app.objOffsetVersion = app.$objAgent.indexOf("Chrome") ) !== -1 && app.isBrowserAndroid ) {

                app.objFullVersion = app.$objAgent.substring(app.objOffsetVersion+7, app.objOffsetVersion+9);

                if( app.objFullVersion < app.nativeAndroidMinimumChromeVersion ) {
                    app.oldAndroid = true;
                    app.arrayHtmlAdd.push('old-android');
                }
            }
            // Si le navigateur natif d'Android utilise "Safari"
            else if( (app.objOffsetVersion = app.$objAgent.indexOf("Safari") ) !== -1 && app.isBrowserAndroid ) {
                app.oldAndroid = true;
                app.arrayHtmlAdd.push('old-android');
            }




            /*
             * Ã‰critures dans le DOM
             * Ajout et suppression de classes dans la balise HTML
             */
            app.arrayHtmlAdd.forEach(function (entry) {
                app.$html.classList.add(entry);
            });
            app.arrayHtmlRemove.forEach(function (entry) {
                app.$html.classList.remove(entry);
            });




            /*
             * Mettre la valeur -false- Ã  la variable de vÃ©rification du premier chargement de la fonction
             */
            app.isDetectFeatureFirstLoad = false;
        }

		$(window).on('touchmove', function(){
	        app.swiping = true;
	    }).on('touchstart', function(){
	        app.swiping = false;
	    });
    };

    Revealizr = new Revealizr();
})(window, document, jQuery);

// Ã€ mettre en-haut complÃ¨tement dans le script principal du site, celui qui s'occupe de charger le reste de vos scripts
// Ã€ utiliser avec UnderscoreJS pour mieux contrÃ´ler l'appel sur le -resize-
/*
// Appel de la fonction detectFeatures() de Revealizr
_.defer(Revealizr.detectFeatures);
$(window).on('resize', _.throttle(function () {
    "use strict";

    Revealizr.detectFeatures();
}, 200));
*/