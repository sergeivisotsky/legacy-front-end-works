<<<<<<< HEAD
$(document).ready(function(){

$('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 1000);
    e.preventDefault();
});

=======
$(document).ready(function(){

$('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 1000);
    e.preventDefault();
});

>>>>>>> 73c9c6c0e7b01910b71996e2c831a97ab0354f3d
});