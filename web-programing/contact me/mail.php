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

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>Sending mail ...</title>
	<style type="text/css">
		body {
			background-color: #F4F4F4;
		}

		.ok {
			color:#23B3AB;
		}

		.err {
			color:#BD5B3D;
		}
	</style>
</head>
<body>
	<?php

		$mymail = 'info@mydomain.com';

		$name    = $_POST['name'];
		$email   = $_POST['mail'];
		$subject = $_POST['subject'];
		$msg    = $_POST['msg'];

		if( strlen($name)>=3 && strlen($email)>=7 && strlen($subject)>=5 && strlen($msg)>=10 ){
			if( @mail (
					$mymail,
					"mydomain.com contact : $subject",
					$msg,
					"From:$name <$email" )
			){
				echo '<h2 class="ok">Mail sent</h2>';
			}else{
				echo '<h2 class="err">Error in sending mail.</h2>';
			}
		}else{
			echo '<h2 class="err">Access Restricted !</h2>';
		}
	?>
</body>
</html>