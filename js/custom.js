(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // Sticky Navbar js
        window.addEventListener("scroll", function(){
            var header = this.document.querySelector("header");
            header.classList.toggle("sticky", this.window.scrollY > 0);
        });

        // init Isotope
        // $('.grid').isotope({
        //     itemSelector: '.grid-item',
        //     masonry: {
        //       columnWidth: 100
        //     }
        // });

        // Owl Carousel js
        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:7000,
          autoplayHoverPause:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
        });

        // Owl Carousel js
        $('.support-company-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:7000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    item:6
                },
                600:{
                    item:6
                },
                1000:{
                    item:6
                }
            }
          });
    
    });

}(jQuery));	

