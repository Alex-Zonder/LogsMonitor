var body_footer_height = parseInt(getCookie("body_footer_height")) || 150;
var body_footer_opened = false;


// Init //
var body_block;
var body_footer;
var body_footer_separator;
var InitBodyFooter = function () {
	body_block = document.getElementById("Body_Block");
	body_footer = document.getElementById("Body_Footer");
	body_footer_separator = document.getElementById("Body_Footer_Separator");

	Init_Body_Footer_Height_Changing();

	if (body_footer_opened) Button_Body_Footer();
}
window.addEventListener("DOMContentLoaded", function() {InitBodyFooter();});


// Open / Close //
var Button_Body_Footer = function () {
	Transition ("Body_Footer",300);
	Transition ("Body_Block",300);

	if (body_footer.style.display == "") {
		body_block.style.height = "calc(100% - " + (31 + body_footer_height) + "px)";
		body_footer.style.height = body_footer_height;
		body_footer.style.display = "block";
	}
	else {
		body_block.style.height = "calc(100% - 31px)";
		body_footer.style.height = 0;
		body_footer.style.display = "";
	}
}




var body_footer_change_enabled = false;
var body_footer_change_started = 0;
function Init_Body_Footer_Height_Changing () {
	body_footer_separator.onmousedown = function(e) {Enable_Change_Body_Footer_Height (e);}
	document.body.addEventListener("mousemove", function(e) {Change_Body_Footer_Height (e);});
	document.body.addEventListener("mouseup", function(e) {Disable_Change_Body_Footer_Height (e);});
}

function Enable_Change_Body_Footer_Height (e) {
	body_footer_change_enabled = true;
	body_footer_change_started = e.clientY;
}
function Change_Body_Footer_Height (e) {
	if (body_footer_change_enabled == true) {
		y_changed = body_footer_change_started - e.clientY;
		body_block.style.height = 'calc(100% - ' +(body_footer_height + y_changed + 31) + 'px)';
		body_footer.style.height = body_footer_height + y_changed + "px";
	}
}
function Disable_Change_Body_Footer_Height (e) {
	if (body_footer_change_enabled == true) {
		y_changed = body_footer_change_started - e.clientY;
		body_footer_height = body_footer_height + y_changed;
		body_footer_change_enabled = false;
		setCookie("body_footer_height", body_footer_height);
	}
}
