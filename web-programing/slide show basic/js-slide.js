window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);

	var train = slideshow.getElementsByClassName('train').item(0);
	var currentSlide = 0;

	goToslide = function (n) {
		train.style.left=(-600*n)+'px';
		list.item(currentSlide).className = '';
		list.item(n).className = 'active';
		currentSlide=n;
	}

	var list = slideshow.getElementsByClassName('button').item(0).getElementsByTagName('li');
	for(var i=0;i<list.length;i++){
		(function(j){
			list.item(j).onclick=function(){
				goToslide(j);	
			}	
		})(i);
		
	}

}