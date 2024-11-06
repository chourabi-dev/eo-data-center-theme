$(document).ready(function(){
    var sericeLigne1 = $('.slider1').owlCarousel({
        loop:true,
        items: 3,
        responsive: {
            0: {      
              items: 1
            },
            600: {      
              items: 2
            },
            1000: {     
              items: 3
            }
          }
    });

    var sericeLigne2 = $('.slider2').owlCarousel({
        loop:true,
        items: 4,
        responsive: {
            0: {      
              items: 1
            },
            600: {      
              items: 2
            },
            1000: {     
              items: 4
            }
          }
    });

 

    $("#next").on("click", function() { 
        sericeLigne1.trigger("next.owl.carousel");
        sericeLigne2.trigger("next.owl.carousel");
    });

    $("#previous").on("click", function() { 
        sericeLigne1.trigger("prev.owl.carousel");
        sericeLigne2.trigger("prev.owl.carousel"); 
    });




    var $navbar = $("#navbar");
    var scrollOffset = 50; // Adjust this value to control when the class is added
  
    $(window).on("scroll", function() {
      if ($(window).scrollTop() > scrollOffset) {
        $navbar.addClass("scrolled");
      } else {
        $navbar.removeClass("scrolled");
      }
    });


})