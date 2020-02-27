$('.tip3').owlCarousel({
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  items:3,
  margin:0,
  loop:true,
  stagePadding: 0,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  nav:false,
  navText: false,
   dots: false,
   responsive:{
      0:{
          items:1,
          nav:true,
          navText: true,
          dots: false,
      },
      768:{
          items:2,
          nav:true,
          navText: false,
      dots: false,
      },
      991:{
        items:2,
        nav:true,
        navText: false,
        dots: false,
      },
      992:{
          items:3,
          nav:false,
          navText: false,
          dots: false,
      }
    }
});



$(window).scroll(function() {
    if ( $(this).scrollTop() > 150){
        // $('.navbar-brand .aa').fadeOut(50);
        // $('.navbar-brand .cc').fadeIn(50);
        $('header').addClass('bg-black');
    } else {
        // $('.navbar-brand .aa').stop().fadeIn(50);
        //  $('.navbar-brand .cc').fadeOut(50);
         $('header').removeClass('bg-black');
    }
});


