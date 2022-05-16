$(document).ready(function(){
    $('.menu').slicknav({
        "prependTo": '.menu',
        "closeOnClick": '.menu',
    });
    $("html").smoothScroll(1000);
});

$(document).ready(function(){
    $('.slider').owlCarousel ({
        autoplay: true,
        autoplayTimeout: 5000,
        loop:true,
        smartSpeed: 500,
        margin:20,
        // nav: true,
        autoplayHoverPause:true,
        navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        } 
    });
    /** FASHION PHOTOGRAPHY SLIDER ***/
    $('.slider2').owlCarousel ({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        // nav: true,
        navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });

    /** BLACK & WHITE PHOTOGRAPY SLIDER ** */
    $('.slider3').owlCarousel ({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });

});