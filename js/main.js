$(function () {
  const pause = $(".visual .video-area .video-btns button:first-child");
  const play = $(".visual .video-area .video-btns button:last-child");

  pause.click(function () {});

  $(".news .news-slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    arrows: true,
    prevArrow: $(".news .left-btn"),
    nextArrow: $(".news .right-btn"),
    responsive: [
      //반응형 적용여부
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
        },
      },
    ],
  });

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $(".header").outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    let st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      $(".header").removeClass("nav-down").addClass("nav-up");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $(".header").removeClass("nav-up").addClass("nav-down");
      }
    }

    lastScrollTop = st;
  }
});
