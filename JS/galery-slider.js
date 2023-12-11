$(document).ready(function () {
  $(".gallerySlider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1119,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
