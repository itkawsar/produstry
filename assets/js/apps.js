$(function() {
    $('#active_menu').on('click', function() {
        $('#nav #main-menu ul, #nav .navbar-brand').toggleClass('active')
    })

    $('.banner_slider').slick({
        prevArrow: '<i class="banner-icons fa fa-chevron-left prv-arrow"></i>',
        nextArrow: '<i class="banner-icons fa fa-chevron-right nxt-arrow"></i>',
        dots: false,
        autoplay: true,
        speed: 1000,
        fade: true,

    });
    $('.service_slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,

    });
});