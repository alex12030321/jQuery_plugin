$(document).ready(function () {
    $('.go_top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
    $(window).scroll(function (event) {
        if ($(document).scrollTop() > 0) {
            $('.go_top').show();
        } else {
            $('.go_top').hide();
        }
    });

    // swiper setting
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 3000,
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });

    $('.product').click(function(event) {
        $('.contactUs').slideUp();
        $('.productList').slideToggle();
    });
    $('.contact').click(function(event) {
        $('.productList').slideUp();
        $('.contactUs').slideToggle();
    });
});