jQuery(function ($) {
   
    jQuery('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top -475
        },1100, 'swing');

    });
    
});