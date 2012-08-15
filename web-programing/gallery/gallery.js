// JavaScript Document
Math.rnd = Math.random;
Math.random = function(a,b){
	return Math.round( Math.rnd()*(b-a+1))+a;
}

$(function(){
	var img = $("div.gallery a");
	img.each(function(){
		$(this).animate({
			left:Math.random(50,550),
			bottom:Math.random(50,550),
			rotate:Math.random(90,180)+'deg',
			scale:(0.1,0.8)
		},900);	
	});
	img.mouseover(function(){
		$(this).css({'z-index':'2'});
		$(this).animate({rotate:Math.random(5,20)+'deg'})
	});
	
	img.mouseout(function(){
		$(this).css({'z-index':'1'});
		$(this).animate({rotate:Math.random(20,50)+'deg'})
	});
})