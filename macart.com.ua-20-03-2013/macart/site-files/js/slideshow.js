$(document).ready(function(){ 

	$(".slideshow img:first").css("display", "block");

	jQuery.fn.timer = function() {
		if(!$(this).children("img:last-child").is(":visible")){
			$(this).children("img:visible")
				.css("display", "none")
				.next("img").css("display", "block");
		}
		else{
			$(this).children("img:visible")
				.css("display", "none")
			.end().children("img:first")
				.css("display", "block");
		}
	} // Timer function end

	window.setInterval(function() {
		$(".slideshow").timer();
	}, 3000);

});
