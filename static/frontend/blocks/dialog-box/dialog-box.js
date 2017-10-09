(function ($) {
    $(document).ready(function() {
        $('.dialog-box .dialog-box__content-close').on('click', function() {
            $(this).parents('.dialog-box').hide();
        });
    });
})(jQuery);