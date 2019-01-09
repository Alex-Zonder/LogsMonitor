<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="<?php echo $description; ?>">
		<title><?php echo($title) ?></title>

		<link rel="stylesheet" type="text/css" href="<?php echo $htmlRoot.$template; ?>main.css" />
		<script src="<?php echo $htmlRoot.$template; ?>js/main_menu.js"></script>
		<script src="<?php echo $htmlRoot.$template; ?>js/body_footer.js"></script>
	</head>
	<body>


		<!--     Menu     -->
		<div id="Menu_Holder">
			<div id="Menu_Body_Separator"></div>
			<div id="Head">Меню</div>
			<?php include($docRoot."_templates/menu.php") ?>
		</div>

		<script type="text/javascript">
			Menu_Body_Separator.onmousedown = function(e) {Enable_Change_Menu_Width (e);}
			document.body.addEventListener("mousemove", function(e) {Change_Menu_Width (e);});
			document.body.addEventListener("mouseup", function(e) {Disable_Change_Menu_Width (e);});
		</script>


		<!--     Body     -->
		<div id="Body_Holder">
			<!--     OnResize()     -->
			<iframe name="body_resized" id="body_resized" style="width:calc(100%);height:0;border:0;"></iframe>
			<script>
			body_resized.onresize = function () {
				if (typeof OnResize === "function") OnResize(document.getElementById('body_resized').clientWidth);
			}
			</script>


			<div id="Head"><?php echo explode(" - ",$title)[1]; ?></div>
			<div id="Body_Block">




			<?php
			//					A U T H O R I Z A T I O N					//
			include($docRoot."_templates/auth.php");
			?>




			<script type="text/javascript">
			//   Add Keyboard Events   //
			function OnEscape() {Button_Main_Menu ();}
			</script>
