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
    autoplayTimeout:5000,
    autoplaySpeed:3500,
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

$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                // do work
                owl.trigger('stop.owl.autoplay');
                break;
            case "focus":
                // do work
                owl.trigger('play.owl.autoplay', [1000]);
                break;
        }
    }

    $(this).data("prevType", e.type);
});
