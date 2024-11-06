$(document).ready(function(){
  
    var slider3 = $('.testimonial-slider').owlCarousel({
        loop:true,
        items: 3, 
        nav: true,
        margin:10,
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

 

    

    $("#previous-btn").on("click", function() {  
        slider3.trigger("prev.owl.carousel");
        
    });

    $("#next-btn").on("click", function() {   
        console.log("n");
        
        slider3.trigger("next.owl.carousel"); 
    });
})