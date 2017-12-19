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
