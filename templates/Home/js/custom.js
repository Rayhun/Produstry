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
    
	

    // Smooth scroll
    $('nav a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //banner slider
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.left1',
        nextArrow: '.right1',
        fade: true,
        speed: 2500,
        autoplaySpeed: 3000,
        dots: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    fade: false,
                }
    }
  ]
    });
    $('.service-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    fade: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]
    });

    $('.poartfolio-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    fade: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    fade: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]
    });
    $('.team-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    fade: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]
    });
    $('.main').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.lefts',
        nextArrow: '.rights',
        autoplay: true,
        centerMode: true,
        centerPadding: 0,
        autoplaySpeed: 2500,
        speed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplaySpeed: 1000,
                    speed: 1000,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    fade: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplaySpeed: 1000,
                    speed: 1000,
                }
    }
  ]
    });
    $('.text').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: 0,
        fade: true,
        autoplaySpeed: 1000,
        speed: 1000,
        asNavFor: '.img',
    });
    $('.img').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: 0,
        autoplaySpeed: 1000,
        speed: 1000,
        asNavFor: '.text',
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });
     //WOW JS
        new WOW().init();
        

});