// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;
var icone;

// drag and drop
var overlay;

function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map-canvas");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
    mapdiv.style.width = '90%';
    mapdiv.style.height = '90%';
  }
}
function initialize() {
                var mapOptions = {
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                        position: google.maps.ControlPosition.TOP_LEFT },
                    zoomControl: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.LARGE,
                        position: google.maps.ControlPosition.LEFT_TOP
                    },
                    scaleControl: true,
                    scaleControlOptions: {
                        position: google.maps.ControlPosition.TOP_LEFT
                    },
                    streetViewControl: false,

                    panControl:false,

                };
	//detectBrowser();
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Curitiba'
      });

		google.maps.event.addListener(map, 'click', function(event) {
			placeMarker(event.latLng);
		});
		
      map.setCenter(pos);
	  
                overlay = new google.maps.OverlayView();
                overlay.draw = function() {};
                overlay.setMap($map);

    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Erro no serviço de Geolocalização!';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(-25.428954, -49.267137),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}
function placeMarker(location) {
  var marker = new google.maps.Marker({
      position: location,
      map: map,
	  icon: icone
  });
	  var lat = document.getElementById("placar_latitude");
      lat.innerHTML ="<p>"+ location.lat() +"</p>";
	  //$("#placar_latitude").html("<p>"+ position.coords.latitude +"</p>");
	  var lon = document.getElementById("placar_longitude");
      lon.innerHTML ="<p>"+ location.lng() +"</p>";
	  //$("#placar_longitude").html("<p>"+ position.coords.longitude +"</p>");

}

google.maps.event.addDomListener(window, 'load', initialize);

function mudarcursor( i){
	icone = i;
}

            $(document).ready(function() {
                $("#icon001").draggable({helper: 'clone',
                    stop: function(e) {
                        var point=new google.maps.Point(e.pageX,e.pageY);
                        var ll=overlay.getProjection().fromContainerPixelToLatLng(point);
                        var icon = $(this).attr('src');
                        placeMarker2(ll, icon);
                    }
                });
                $("#icon002").draggable({helper: 'clone',
                    stop: function(e) {
                        var point=new google.maps.Point(e.pageX,e.pageY);
                        var ll=overlay.getProjection().fromContainerPixelToLatLng(point);
                        var icon = $(this).attr('src');
                        placeMarker2(ll, icon);
                    }
                });
                $("#icon003").draggable({helper: 'clone',
                    stop: function(e) {
                        var point=new google.maps.Point(e.pageX,e.pageY);
                        var ll=overlay.getProjection().fromContainerPixelToLatLng(point);
                        var icon = $(this).attr('src');
                        placeMarker2(ll, icon);
                    }
                });
                $("#icon004").draggable({helper: 'clone',
                    stop: function(e) {
                        var point=new google.maps.Point(e.pageX,e.pageY);
                        var ll=overlay.getProjection().fromContainerPixelToLatLng(point);
                        var icon = $(this).attr('src');
                        placeMarker2(ll, icon);
                    }
                });
                $("#icon005").draggable({helper: 'clone',
                    stop: function(e) {
                        var point=new google.maps.Point(e.pageX,e.pageY);
                        var ll=overlay.getProjection().fromContainerPixelToLatLng(point);
                        var icon = $(this).attr('src');
                        placeMarker2(ll, icon);
                    }
                });
            });
			
            function placeMarker2(location, icon) {
                var marker = new google.maps.Marker({
                    position: location, 
                    map: $map,
                    icon: icon
                });
			  $("#placar_latitude").html("<p>"+ location.lat() +"</p>");
			  var lon = document.getElementById("placar_longitude");
			  lon.innerHTML ="<p>"+ location.lng() +"</p>";
			  //$("#placar_longitude").html("<p>"+ position.coords.longitude +"</p>");

            }
