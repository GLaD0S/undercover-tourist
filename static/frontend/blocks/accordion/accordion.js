(function ($) {
    $(document).ready(function() {
        /* Accordion controls open and close logic */
        $('.accordion__controls').on('click', function() {
            $('.accordion__controls .accordion__open-close').toggleClass('accordion__open-close_opened');
            $('.accordion__controls .accordion__open-close').toggleClass('accordion__open-close_closed');
            
            if($('.accordion__content').hasClass('accordion__content_closed')) {
                $('.accordion__content').fadeIn(function() {
                    $('.accordion__content').removeClass('accordion__content_closed');
                    $('.accordion__content').addClass('accordion__content_opened');
                });
            }
            if($('.accordion__content').hasClass('accordion__content_opened')) {
                $('.accordion__content').fadeOut(function() {
                    $('.accordion__content').removeClass('accordion__content_opened');
                    $('.accordion__content').addClass('accordion__content_closed');
                });
            }
        });
    });
})(jQuery);