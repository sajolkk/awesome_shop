$(document).ready(function(){
    
    //============nav bar hide and show scroll==========///
    //hidenavbar first//
    $('.heading-area-scroll').hide();
    
        $(window).scroll(function(){
            
            if($(this).scrollTop()>200){
                
                $('.heading-area-scroll').fadeIn();
            }
            else
                {
                   $('.heading-area-scroll').fadeOut(); 
                }
        });
        

    //owl carosoule//
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:2
            },
            600:{
                items:3
            }, 
            1200:{
                items:4
            },
        }
    });
    
    
    //parallase///
    
    $('.tweets-prlx').scrolly({bgParallax: true});
    $('.counter-prlx').scrolly({bgParallax: true});
    
    
    //counter///

     $('.timer').countTo();
    
    
    
    //image zoom////
   $(".image-zoom").elevateZoom({
       scrollZoom : true,
       zoomWindowWidth: 600,
       zoomWindowHeight: 400,
       zoomWindowFadeIn: 500,
       zoomWindowFadeOut: 500,
       lensFadeIn: 500,
       lensFadeOut: 500,
       zoomWindowOffetx: 5,
   });
    
});