$(function () {



    $('.news .news-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        arrows: true,
        prevArrow: $(".news .left-btn"),
        nextArrow: $(".news .right-btn"),
        responsive: [ //반응형 적용여부
            {
                breakpoint: 768, //해상도 브레이크 포인트 설정
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    prevArrow: false,
                    nextArrow: false,
                    variableWidth: false,
                }
            }]
    });







});