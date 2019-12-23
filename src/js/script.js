// $(document).read(function(){
//   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//     $(this)
//       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//       .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//   });
// });

// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         //adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                   dots: true,
//                   arrows: false,
//                   dotsClass: 'slick-dots'
//                 }
//               },
//               {
//                 breakpoint: 600,
//                 settings: {
//                     dots: true,
//                     arrows: false,
//                     dotsClass: 'slick-dots'
//                 }
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                     dots: true,
//                     arrows: false,
//                     dotsClass: 'slick-dots'
//                 }
//               }
//         ]
//       });
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    // responsive: {
    //     1024: {
    //       nav: false
    //     },
    //     600: {
    //       nav: true
    //     },
    //     480: {
    //       nav: true
    //     }
    //   }
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
    });

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
    });

