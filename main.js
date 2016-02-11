$(document).ready(function() {
// 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=74c748016b93d02d0bf3fb091373a1ba&tags=lighthouse'
var search_term = "lighthouse";
var api_key = "74c748016b93d02d0bf3fb091373a1ba";
var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key="+api_key+"&tags="+search_term;

$.ajax({
  url: url,
  jsonp: "jsoncallback",
  dataType: "jsonp",
  success: function(data) {
    // console.log(data);
    // console.log(data.photos);
    // console.log(data.photos.photo[2].id);
    //console.log(dta.count);
    //if (data.items.length > 0) {
      //console.log("we got some data");
      var c=1;
      $.each(data.photos.photo, function(i,item) {
        if (c<=5){
          console.log(item);

          // FLICKR API WITH AJAX DOESNOT RETURN PATH OF THE IMAGE. 
          // WE HAVE TO CREATE THE PATH OR SRC IN THE WAY DEFINED BELOW 
          //https://farm2.staticflickr.com/1652/24581769439_04afc3c044.jpg
          //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

          photoHTML = "<img src='https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg'>";
          console.log(photoHTML);
          $('#photos').append(photoHTML).fadeIn(200);
        }
        c=c+1;
      });
    // } else {
    //   console.log("no data is returned");
    //   //alert(data.items.lenght);
    // }
  },
  error: function(message){
    alert('Try again!!');
  }
});
// See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});