<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Send Mail</title>
</head>

<body>

<?php
	if(isset($_POST['FirstNname']) && isset($_POST['Sobject']) && isset($_POST['msg'])){
		$name = $_POST['FirstNname'];
		$subject = $_POST['Sobject'];
		$msg = $_POST['msg'];
		
		
		if(@mail('somaieh.soodmand@gmail.com',$subject,'Name: '.$name. "\n" .$msg,"From:s_soodmand@yahoo.com".$email)){
			echo '<h1 style="text-align:center;">Your massage has been sent. Please be patient for the answer. thank you!</h1>';
		}
		else{
			echo '<h1 style="text-align:center;">Your massage has not been sent. Please fill the form again. thank you!</h1>';
		}
	}
?>

</body>
</html>