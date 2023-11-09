$(document).ready(function () {
    $(document).on('click', '.toggleButton', function () {
        $(this).find('.additional-info').toggleClass('active');
    });

    $(document).on('click', '.toggleButtonFaq', function () {
        $(this).parent().parent().find('.additional-info').toggleClass('active');
    });

    // $(document).click(function (event) {
    //     if (!$(event.target).closest('.faq-card').length) {
    //         $('#faqCard').removeClass('active');
    //     }
    // });
});
