var owl = $('.owl-carousel');

$(document).ready(function(){
  owl.owlCarousel();
});

owl.owlCarousel({
    loop:true,
    center:true,
    margin:50,
    dots: false,
    nav:false,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:1000,
    animateOut:true,
    responsive:{
        575.98:{
            items:3
        },
        767.98:{
            items:3
        },
        991.98:{
            items:5
        }
    }
})
