/* ========= JS File ==========

JS FILE INDEX
=============

1- //  Auto Type Setup
2- // Go Down Button
3- // Go To Section 
4- // Portfolio Slider
*/

$(document).ready(function () {

    'use strict';

    //  Auto Type Setup

    $('.hero-section .typed').typed({
        strings: ["Wordpress Websites", "Custom Solutions", "Applications.", "Pixel Perfect Web Pages."],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    });
    
    // Go Down Button
    $('.go-down').on('click', function () {
        $('.body, html').animate({
            scrollTop: $('.about').offset().top
        }, 1000)
    });
    
    // Go To Section 
    $('.menu-item-box .menu-item').on('click', function (e) {
        e.preventDefault();
        
        $('.menu-item-box').removeClass('active');
        
        $(this).parent('.menu-item-box').addClass('active');
        
        $('html, body').animate({
            scrollTop: $($(this).data('link')).offset().top
        }, 1000);
    });

    // Portfolio Slider
    if ($('.projects-slider').length) {

        $('.projects-slider').slick({
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true,
          centerMode: true,
          focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                  }
                }
              ]
        });
    
  
    
  }
    
});