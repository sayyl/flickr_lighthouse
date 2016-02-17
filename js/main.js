//= require jquery
//= require jquery
//= require materialize

$(document).ready(function() {

  var search_term = "lighthouse";
  var api_key = "c30533120fb670a6299cf3c1b93c41c8";
  var imgURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key="+api_key+"&tags="+search_term;

  function getImgLikesURL(photoId) {
    return imgLikes = "https://api.flickr.com/services/rest/?method=flickr.photos.getFavorites&api_key="+api_key+"&photo_id="+photoId+"&format=json"
  };

  var handlers = {
    addImageToDOM: function(item, callback) {
      var title = item.title;
      var imgLink = "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg";
      var photoHTML = "<img src='https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg'>";
      var $image = $(photoHTML);

      var $li = $("<li>");
      $li.attr('id', 'list_item_' + item.id);
      var $div = $("<div>");
      $image.appendTo($li);
      $li.appendTo(".slides");
      $div.addClass("caption").appendTo($li);
      $("<h5>").text(title).addClass("caption h5").appendTo($div);

      callback();
    }
  }

  var getImgLikes = function (){
    $.ajax({
      url: imgLikes,
      jsonp: "jsoncallback",
      dataType: "jsonp",
      success: function(data) {
        var imgId = data.photo.id;
        var likeLength = data.photo.person.length++;
        $('#list_item_' + imgId + ' div.caption').append("<h5 class='h5 caption'>"
        + likeLength 
        + "<i class='tiny material-icons'>favorite</i></h5>");
      },

      error: function(message){
        alert('Try again!!');
      }
    });
  };

  $.ajax({
    url: imgURL,
    jsonp: "jsoncallback",
    dataType: "jsonp",
    success: function(data) {
              
      var photos = data.photos.photo.slice(0, 9);
      
      $.each(photos, function(i,item) {
        var imgLikeURL = getImgLikesURL(item.id); 

        handlers.addImageToDOM(item, function() {
          getImgLikes();  
        });
              
      });
      $('.slider').slider();
    },

    error: function(message){
      alert('Try again!!');
    }
  });

});