//= require jquery
//= require jquery
//= require materialize

$(document).ready(function() {
// 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=74c748016b93d02d0bf3fb091373a1ba&tags=lighthouse'

var search_term = "lighthouse";
var api_key = "c30533120fb670a6299cf3c1b93c41c8";
var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key="+api_key+"&tags="+search_term;

var handlers = {
  addImageToDOM: function(item) {
      var title = item.title;

    var photoHTML = "<img src='https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg'>";

    var $image = $(photoHTML);

    // $(".slider").find(".slides").each(function() {
    //   var li = $("<li>");
    //   $image.appendTo(li);
    //   li.appendTo(".slides");
    // });

    var li = $("<li>");
    $image.appendTo(li);
    li.appendTo(".slides");

    console.log(photoHTML);
    console.log(title);
  }
}

$.ajax({
  url: url,
  jsonp: "jsoncallback",
  dataType: "jsonp",
  success: function(data) {
      
      var c=1;
      $.each(data.photos.photo, function(i,item) {
        if (c<=5){
          handlers.addImageToDOM(item)
          c=c+1;
        };
      });
    $('.slider').slider();
  },

  error: function(message){
    alert('Try again!!');
  }
});

// See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});