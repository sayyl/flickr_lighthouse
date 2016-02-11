$(function() {

  var ajaxURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=c30533120fb670a6299cf3c1b93c41c8&tags=lighthouse"
  $.ajax({
    
    dataType: "jsonp",
    url: ajaxURL,
    jsonp: 'jsoncallback',
    success: function (data) {
      var photos = data;

    }

  });

});