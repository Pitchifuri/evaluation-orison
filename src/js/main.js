$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&jsoncallback=?",
{
  api_key: "be39ed909c012ebdf5726ca2873cfefe",
  tags : "lamp",
  per_page: 5,
  page: 1,
})
.done(function(data) {
  console.log(data);
      var source = $('#results-template').html();
			var template = Handlebars.compile(source);
			var img = template(data.photos.photo);
  		console.log(img);
  		$('#results').html(img);
});




$(window).on("scroll", function() {
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    $(".scrollReveal").each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).css("opacity", 1);
      } else {
        $(this).css("opacity", 0);
      }
     });
   });


   function initMap() {
     var home = {lat: 37.4219999, lng: -122.0862515};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 16,
       center: home,
       gestureHandling: "cooperative",
       styles: [
               {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
               {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
               {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
               {
                 featureType: 'administrative.locality',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#d59563'}]
               },
               {
                 featureType: 'poi',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#d59563'}]
               },
               {
                 featureType: 'poi.park',
                 elementType: 'geometry',
                 stylers: [{color: '#263c3f'}]
               },
               {
                 featureType: 'poi.park',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#6b9a76'}]
               },
               {
                 featureType: 'road',
                 elementType: 'geometry',
                 stylers: [{color: '#38414e'}]
               },
               {
                 featureType: 'road',
                 elementType: 'geometry.stroke',
                 stylers: [{color: '#fff'}]
               },
               {
                 featureType: 'road',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#9ca5b3'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'geometry',
                 stylers: [{color: '#746855'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'geometry.stroke',
                 stylers: [{color: '#1f2835'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#f3d19c'}]
               },
               {
                 featureType: 'transit',
                 elementType: 'geometry',
                 stylers: [{color: '#2f3948'}]
               },
               {
                 featureType: 'transit.station',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#d59563'}]
               },
               {
                 featureType: 'water',
                 elementType: 'geometry',
                 stylers: [{color: '#17263c'}]
               },
               {
                 featureType: 'water',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#515c6d'}]
               },
               {
                 featureType: 'water',
                 elementType: 'labels.text.stroke',
                 stylers: [{color: '#17263c'}]
               }
             ]

     });
     var marker = new google.maps.Marker({
       position: home,
       map: map,
       animation: google.maps.Animation.BOUNCE,
       icon:"../img/marker-orison.png"
     });
   }
