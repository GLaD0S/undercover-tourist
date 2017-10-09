(function ($) {
    $(document).ready(function() {
        $('.accordion__controls .accordion__open-close').on('click', function() {
            $('.accordion__controls .accordion__open-close').toggleClass('accordion__open-close_opened');
            $('.accordion__controls .accordion__open-close').toggleClass('accordion__open-close_closed');
            $('.accordion__content').toggleClass('accordion__content_opened');
            $('.accordion__content').toggleClass('accordion__content_closed');
        });
    });
})(jQuery);