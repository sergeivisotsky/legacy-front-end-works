$(document).ready(function(){

$("#iphone-ico").click(function() {
	$("#iphone-ico").addClass('iphone-ico-active');
	$("#ipad-ico").removeClass('ipad-ico-active');
	$("#ipod-ico").removeClass('ipod-ico-active');
	$("#device-bg").css({ "background-image" : "url(img/devices-bg/iphone-bg.jpg)" });
	$('#link1').text("iPhone 3G и 3Gs").removeClass('active');
	$('#link2').text("iPhone 4").removeClass('active');
    $('#link3').text("iPhone 4s").removeClass('active');
    $('#link4').text("iPhone 5").removeClass('active');
	$("#problem").css('display', 'none');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');
	$('#problem-title').text('');
});	

$("#ipad-ico").click(function() {
	$("#iphone-ico").removeClass('iphone-ico-active');
	$("#ipad-ico").addClass('ipad-ico-active');
	$("#ipod-ico").removeClass('ipod-ico-active');
	$("#device-bg").css({ "background-image" : "url(img/devices-bg/ipad-bg.jpg)" });
	$('#link1').text("iPad").removeClass('active');
	$('#link2').text("iPad 2").removeClass('active');
    $('#link3').text("iPad 3 и iPad 4").removeClass('active');
    $('#link4').text("iPad Mini").removeClass('active');
	$("#problem").css('display', 'none');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');		
	$('#problem-title').text('');
});

$("#ipod-ico").click(function() {
	$("#iphone-ico").removeClass('iphone-ico-active');
	$("#ipad-ico").removeClass('ipad-ico-active');
	$("#ipod-ico").addClass('ipod-ico-active');
	$("#device-bg").css({ "background-image" : "url(img/devices-bg/ipod-bg.jpg)" });
	$('#link1').text("iPod Video").removeClass('active');
	$('#link2').text("iPod Classic").removeClass('active');
    $('#link3').text("iPod Touch 1G, 2G и 3G").removeClass('active');
    $('#link4').text("iPod Touch 4G").removeClass('active');	
	$("#problem").css('display', 'none');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');		
	$('#problem-title').text('');
});

$("#link1").click(function() {
	$("#link1").addClass('active');
	$("#link2").removeClass('active');
	$("#link3").removeClass('active');
	$("#link4").removeClass('active');
	$("#problem").css('display', 'block');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');		
	$('#problem-title').text('');
});

$("#link2").click(function() {
	$("#link1").removeClass('active');
	$("#link2").addClass('active');
	$("#link3").removeClass('active');
	$("#link4").removeClass('active');
	$("#problem").css('display', 'block');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');		
	$('#problem-title').text('');
});

$("#link3").click(function() {
	$("#link1").removeClass('active');
	$("#link2").removeClass('active');
	$("#link3").addClass('active');
	$("#link4").removeClass('active');
	$("#problem").css('display', 'block');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');		
	$('#problem-title').text('');
});

$("#link4").click(function() {
	$("#link1").removeClass('active');
	$("#link2").removeClass('active');
	$("#link3").removeClass('active');
	$("#link4").addClass('active');
	$("#problem").css('display', 'block');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');		
	$('#problem-title').text('');
});

$("#problem-lnk").click(function() {
	$("#device-i-v").css('display', 'none');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');		
	$("#problem-popup").css('display', 'block');	
});

$("#close-ico").click(function() {
	$("#device-i-v").css('display', 'block');
	$("#cost-area").css('display', 'none');
	$("#arrow-ico").css('display', 'none');
	$("#problem-popup").css('display', 'none');
	$('#problem-title').text('');	
});

$(".p-title").click(function() {
    var currentId = $(this).attr('id');
    $('#problem-title').text($('#' + currentId).text());
	$("#device-i-v").css('display', 'block');
	$("#cost-area").css('display', 'block');
	$("#arrow-ico").css('display', 'block');
	$("#problem-popup").css('display', 'none');
});	

$('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 1000);
    e.preventDefault();
});

});