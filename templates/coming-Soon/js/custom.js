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
         if (scrolling > 50) {
            $(".bac-to-top").fadeIn(500);
        } else {
            $(".bac-to-top").fadeOut(500);
        }
    });
    // for back to top button
        $('.bac-to-top').click(function(){
            $('html,body').animate({scrollTop: 0},1500);
        });
    
    
    $("#getting-started")
        .countdown("2020/01/01", function (event) {
            $('.days').text(
                event.strftime('%D')
            );
            $('.hours').text(
                    event.strftime('%H')
                );
            $('.minuit').text(
                    event.strftime('%M')
                );
            $('.seconds').text(
                    event.strftime('%S ')
                );
        });
    // WOW JS
    new WOW().init();
    
});