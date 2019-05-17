$(window).on('load', function () {

  let $owl = $('.owl-carousel');

  $owl.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    loop: true,
    margin: 5,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      576: {
        items: 2,
        nav: false
      },
      768: {
        items: 3,
        nav: false
      },
      1024: {
        items: 3
      },
      1400: {
        items: 5
      }
    }
  });

});
