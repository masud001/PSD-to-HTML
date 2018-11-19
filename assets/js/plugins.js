// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.



$(document).ready(function(){
// event-booking-carousel initialization
// --------------------------------------
    $('.event-booking-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        navText:["<div class='nav-btn prev-slide'><span><i class='fas fa-angle-left'></i></span></div>","<div class='nav-btn next-slide'><span><i class='fas fa-angle-right'></i></span></div>"],
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

// popular artist-carousel initialization
// --------------------------------------

    $('.artist-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:["<div class='nav-btn prev-slide'><span><i class='fas fa-angle-left'></i></span></div>","<div class='nav-btn next-slide'><span><i class='fas fa-angle-right'></i></span></div>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });

// popular location-carousel initialization
// --------------------------------------

$('.location-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText:["<div class='nav-btn prev-slide'><span><i class='fas fa-angle-left'></i></span></div>","<div class='nav-btn next-slide'><span><i class='fas fa-angle-right'></i></span></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});



    // mix it up for popular locations
    // ------------------------------
    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    // var containerEl2 = document.querySelector('[data-ref="container-2"]');
    var config = {
        controls: {
            scope: 'local'
        }
    };
    
    // var mixer1 = mixitup(containerEl2, config);
    var mixer2 = mixitup(containerEl1, config);

    // mix it up for compare hotel
    // ------------------------------
    // var mixer1 = mixitup('.popular-location-carpusel');
    // var mixer2 = mixitup('.select-city-pan');
    


});