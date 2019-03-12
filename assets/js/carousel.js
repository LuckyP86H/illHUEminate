$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 3,
                dots: true,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                dots: true,
                loop: false
            }
        }
    });

});