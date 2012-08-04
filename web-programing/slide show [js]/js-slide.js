window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var train = slideshow.getElementsByClassName('train').item(0);
	var list = slideshow.getElementsByClassName('button').item(0).getElementsByTagName('li');
	var currentSlide = 0;

	(goToslide = function (n) {
		if(n >list.length-1) n=0;
		if(n<0) n=list.length-1;
		train.style.left=(-600*n)+'px';
		list.item(currentSlide).className = '';
		list.item(n).className = 'active';
		currentSlide=n;
	})(0);
	
	nextSlide = function(){
		goToslide(currentSlide+1);
	}
	
	prvSlide = function(){
		goToslide(currentSlide-1);
	}

	var autoPlayIv = false;
	(autoPlayStart = slideshow.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide,2000);
	})();

	autoPlayStop = slideshow.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}
	
	slideshow.getElementsByClassName('next').item(0).onclick=nextSlide;
	slideshow.getElementsByClassName('prv').item(0).onclick=prvSlide;
	
	for(var i=0;i<list.length;i++){
		(function(j){
			list.item(j).onclick=function(){
				goToslide(j);	
			}	
		})(i);
	}
}