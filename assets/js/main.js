$(document).ready(function(){
    var sericeLigne1 = $('.slider1').owlCarousel({
        loop:true,
        items: 3,
    });

    var sericeLigne2 = $('.slider2').owlCarousel({
        loop:true,
        items: 4,
    });

    $("#next").on("click", function() {
        sericeLigne1.trigger("next.owl.carousel");
        sericeLigne2.trigger("next.owl.carousel");
        
    });

    $("#previous").on("click", function() {
        sericeLigne1.trigger("prev.owl.carousel");
        sericeLigne2.trigger("prev.owl.carousel");
        
    });
})