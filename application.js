$(function() {

    var showImages = function() {
      var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      $.getJSON(flickerAPI, {
        tags: 'lighthouses',
        tagmode: 'any',
        format: 'json'
      })
        .done(function(data) {
          console.log(data);
          $('.gallery').empty();
          var images = data.items;
          images.forEach(function(image) {

            $('<img>').attr('src', image.media.m).appendTo('.gallery');
          });
        });
    }

  $('#showImages').on('click', function() {
    showImages();
  });

});