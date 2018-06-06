$(document).ready(function(){
img=new Image;img.src="img/counter.png";
$('#counter').flipCounter({
        number:3811185,
        imagePath:"img/counter.png",
        digitHeight:40,
        digitWidth:27
    });
    
    function addCounter(){
        c = 0; b = 2;
        var a = Math.floor(Math.random()*(b-c+1))+c;;
        var val = $('#counter').flipCounter("getNumber") + a;
        $('#counter').flipCounter("setNumber", val);
    }
setInterval(addCounter, 4000);
});