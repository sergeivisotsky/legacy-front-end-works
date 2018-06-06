$(document).ready(function(){

var i=1;
var ShowInterval = 5000;
var actions = ["При замене экрана, стекла, на iPhone's бесплатная пленка в подарок!",
               "При замене экрана, стекла, на iPad's бесплатная пленка в подарок!",
               "При замене экрана, стекла, на iPod's бесплатная пленка в подарок!"
              ]
 
$(function() {
  for (var j = 1; j <= actions.length; j++) {
    if(j==1){
      $("#a-controls").append("<div class=\"next active\" id=\"dot"+j+"\"></div>");
    }else{
      $("#a-controls").append("<div class=\"next\" id=\"dot"+j+"\"></div>");
    }
  }
  $("#action-text").text(actions[0]);
});              

function slide(){
  $("#dot"+i).removeClass('active');
  if(i==actions.length){
    i=1;
  }else{
    i++;
  } 
  $("#dot"+i).addClass('active');
  $("#action-text").fadeOut(function() {
     $(this).text(actions[i-1]).fadeIn();
  });
}

var intervalId = setInterval(slide, ShowInterval);

$(function() {
  $(".next").click(function() {
    clearInterval(intervalId);
    intervalId = setInterval(slide, ShowInterval);
    var currentId = $(this).attr('id');
    $("#dot"+i).removeClass('active');
    i = currentId.substring(3);
    $("#dot"+i).addClass('active');
    $("#action-text").fadeOut(function() {
      $(this).text(actions[i-1]).fadeIn();
    });
 });

}); 
	
});