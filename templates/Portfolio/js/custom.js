$(function () {
    $(window).on('load', function () {

        // preloader 
        var preloaderID = $('#main-preloader');
        preloaderID.addClass('ani_1');
        setTimeout(function () {

            $('.main-navbar-top').addClass('main-navbar-top-active');
            preloaderID.fadeOut(800);

        }, 1000);

    });


    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 100) {
            $(".navbar").addClass("bg");
        } else {
            $(".navbar").removeClass("bg");
        }
        if (scrolling > 150) {
            $(".bac-to-top").fadeIn(500);
        } else {
            $(".bac-to-top").fadeOut(500);
        }
    });

    // for back to top button
    $('.bac-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });


    // Smooth scroll
    $('nav a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //banner slider
    $('.slider-main-about').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        fade: false,
        speed: 2500,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    fade: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1500,
                    autoplaySpeed: 1000,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 1500,
                    autoplaySpeed: 1000,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 1500,
                    autoplaySpeed: 1000,
                }
        }
  ]
    });
    // WOW JS
    new WOW().init();
});