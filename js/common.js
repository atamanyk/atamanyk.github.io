$(document).ready(function() {

    // Модальное окно
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-with-form').on('click', function () {
        $('#fd-modal').find('.fd-form-header').text($(this).text());
        $('#fd-modal').find('[name="fd_title"]').val($(this).text());
    });


});
