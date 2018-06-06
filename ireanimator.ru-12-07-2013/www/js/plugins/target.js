$(document).ready(function(){

$("#target1").click(function() {
	$("#popupAll1").show('fast');
});	

$(document).click( function(event){
   if( $(event.target).closest("#target1").length ) return;
   $("#popupAll1").fadeOut("fast");
   event.stopPropagation();
    });

$("#target2").click(function() {
	$("#popupAll2").show('fast');
});	

$(document).click( function(event){
   if( $(event.target).closest("#target2").length ) return;
   $("#popupAll2").fadeOut("fast");
   event.stopPropagation();
    });
	
});