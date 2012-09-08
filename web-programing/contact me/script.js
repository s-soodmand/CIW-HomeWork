// JavaScript Document

function validateText(str,len){
	return str.length >= len;
}

function validateEmail(email){
	var emailvalid = /^[a-z0-9+_%.-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i ;
	return emailvalid.test(email);
}

$(function(){
	$('#form').submit(function(){
		var target, err = false;

		target = $('#fullname');
		if( validateText(target.val(),3) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#subject');
		if( validateText(target.val(),5) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#email');
		if( validateEmail(target.val()) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#msg');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		if(!err){
			$('#send').animate({
				height:'75px'
			},500);
		}

		return !err;

	});

	$('#reset').click(function(){
		$('#send').animate({
			height:'0px'
		},200);
	});
});