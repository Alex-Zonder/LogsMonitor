var settings_js = require('./settings.js');

//------------   Load settings_js From File   ------------//
var settings = FromJson(ReadFileSync("./settings.json"));
module.exports.settings = settings;
//------------   Save settings_js To File   ------------//
function SaveSettings () {
	WriteFileSync("./settings.json",ToJson(settings_js.settings));
}




function Fill_Files_Hihglight () {
	for (var x=0; x<4; x++)
		document.getElementById('Input_Highlight_Files_' + settings_js.settings["files_highlight"][x]["name"]).value = settings_js.settings["files_highlight"][x]["value"];
}
window.addEventListener('DOMContentLoaded', function() {Fill_Files_Hihglight();});

function Change_Files_Highlight (id) {
	settings_js.settings["files_highlight"][id]["value"] = document.getElementById('Input_Highlight_Files_' + settings_js.settings["files_highlight"][id]["name"]).value;
}


function Fill_Text_Hihglight () {
	for (var x=0; x<4; x++)
		document.getElementById('Input_Highlight_Text_' + settings_js.settings["text_highlight"][x]["name"]).value = settings_js.settings["text_highlight"][x]["value"];
}
window.addEventListener('DOMContentLoaded', function() {Fill_Text_Hihglight();});

function Change_Text_Highlight (id) {
	var elem = document.getElementById('Input_Highlight_Text_' + settings_js.settings["text_highlight"][id]["name"]);
	settings_js.settings["text_highlight"][id]["value"] = elem.value;
}
