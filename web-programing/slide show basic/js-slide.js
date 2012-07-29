window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var list = slideshow.getElementsByClassName('button').item(0).getElementsByTagName('li');
	for(var i=0;i<list.length;i++){
		list.item(i).onclick=function(){
			alert(i);
		}
	}

}