window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var list = slideshow.getElementsByClassName('button').item(0).getElementsByTagName('li');
	for(var i=0;i<list.length;i++){
		(function(j){
			list.item(j).onclick=function(){
				alert(j);
			}	
		})(i);
		
	}

}