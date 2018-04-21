(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


       $(".hero-area").owlCarousel({
           items:1,
           loop:true,
           nav:false,
           dots:true,
           dotsData:false,
           dotsSpeed:1000,
           autoplay:false,
       });


    });

    jQuery(window).load(function(){

        
    });


}(jQuery));	