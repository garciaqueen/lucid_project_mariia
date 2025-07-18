$(document).ready(function () {
  function initSlider() {
    const $slider = $('#my-slider');

    if (window.innerWidth < 992) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 570,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      }
    } else {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  }

  initSlider();
  $(window).on('resize', initSlider);
  });

  $('.price-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(document).ready(function () {
    function initSlider() {
      const $slider = $('#cards-slider');

      if (window.innerWidth < 1096) {
        if (!$slider.hasClass('slick-initialized')) {
          $slider.slick({
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            arrows: false,
            infinite: false,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  centerMode: true,
                }
              },
              {
                breakpoint: 570,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                }
              }
            ]
          });
        }
      } else {
        if ($slider.hasClass('slick-initialized')) {
          $slider.slick('unslick');
        }
      }
    }

    initSlider();
    $(window).on('resize', initSlider);
  });
