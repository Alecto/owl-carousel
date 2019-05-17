$(window).on('load', function () {

  let $owl = $('.owl-carousel');

  $owl.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
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
