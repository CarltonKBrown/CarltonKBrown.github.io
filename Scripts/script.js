! function($) {
    "use strict";

    var CarltonApp = function() {};

    //Preloader
    CarltonApp.prototype.initPreLoader = function() {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        },

        //scroll
        CarltonApp.prototype.initNavbarStickey = function() {
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 50) {
                    $(".sticky").addClass("stickyadd");
                } else {
                    $(".sticky").removeClass("stickyadd");
                }
            });
        },

        //Smooth
        CarltonApp.prototype.initNavbarSmooth = function() {
            $('.navbar-nav a, .scroll_down a').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        //ScrollSpy
        CarltonApp.prototype.initNavbarScrollSpy = function() {
            $("#navbarCollapse").scrollspy({
                offset: 20
            });
        },

        //Funfacts
        CarltonApp.prototype.initFunFacts = function() {
            var a = 0;
            $(window).on('scroll', function() {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.lan_fun_value').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                    });
                    a = 1;
                }
            });
        },

        //Portfolio Filter
        CarltonApp.prototype.initPortfolioFilter = function() {
            $(window).on('load', function() {
                var $container = $('.work-filter');
                var $filter = $('#menu-filter');
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                $filter.find('a').on("click", function() {
                    var selector = $(this).attr('data-filter');
                    $filter.find('a').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            });
        },

        //Magnificpop
        CarltonApp.prototype.initMfpImages = function() {
            $('.img-zoom').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                }
            });
        },

        //ClientSlider
        CarltonApp.prototype.initClientSlider = function() {
            $("#owl-demo").owlCarousel({
                autoPlay: 7000,
                stopOnHover: true,
                navigation: false,
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                autoHeight: true,
            });
        },

        //MfpVideo
        CarltonApp.prototype.initMfpVideo = function() {
            $('.blog_play').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        },

        //Back To Top
        CarltonApp.prototype.initBackToTop = function() {
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 100) {
                    $('.back_top').fadeIn();
                } else {
                    $('.back_top').fadeOut();
                }
            });
            $('.back_top').click(function() {
                $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
            });
        },

        //Typed Text
        CarltonApp.prototype.initTypedText = function() {
            $(".element").each(function() {
                var $this = $(this);
                $this.typed({
                    strings: $this.attr('data-elements').split(','),
                    typeSpeed: 100,
                    backDelay: 3000
                });
            });
        },

        CarltonApp.prototype.init = function() {
            this.initPreLoader();
            this.initNavbarStickey();
            this.initNavbarSmooth();
            this.initNavbarScrollSpy();
            this.initFunFacts();
            this.initPortfolioFilter();
            this.initMfpImages();
            this.initClientSlider();
            this.initMfpVideo();
            this.initBackToTop();
            this.initTypedText();
        },

        //init
        $.CarltonApp = new CarltonApp, $.CarltonApp.Constructor = CarltonApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.CarltonApp.init();
}(window.jQuery);


//Disable cut copy paste
$('body').bind('cut copy paste', function(e) {
    e.preventDefault();
});



// window.onload = function() {
//     document.addEventListener("contextmenu", function(e) {
//         e.preventDefault();
//     }, false);
//     document.addEventListener("keydown", function(e) {
//         //document.onkeydown = function(e) {
//         // "I" key
//         if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//             disabledEvent(e);
//         }
//         // "J" key
//         if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//             disabledEvent(e);
//         }
//         // "S" key + macOS
//         if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
//             disabledEvent(e);
//         }
//         // "U" key
//         if (e.ctrlKey && e.keyCode == 85) {
//             disabledEvent(e);
//         }
//         // "F12" key
//         if (event.keyCode == 123) {
//             disabledEvent(e);
//         }
//     }, false);

//     function disabledEvent(e) {
//         if (e.stopPropagation) {
//             e.stopPropagation();
//         } else if (window.event) {
//             window.event.cancelBubble = true;
//         }
//         e.preventDefault();
//         return false;
//     }
// };