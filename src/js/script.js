$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  dots: true,
                  arrows: false,
                  dotsClass: 'slick-dots'
                }
              },
              {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false,
                    dotsClass: 'slick-dots'
                }
              },
              {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    dotsClass: 'slick-dots'
                }
              }
        ]
      });
  });