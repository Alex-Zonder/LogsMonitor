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




//------------   Highlight Files   ------------//
var Highlight_File = function (data) {
	for (var x=0; settings_js.settings["files_highlight"][x]; x++) {
		if (settings_js.settings["files_highlight"][x]["enabled"]) {
			var values = settings_js.settings["files_highlight"][x]["value"].split(",");
			for (var y=0; values[y]; y++)
				if (data.indexOf(values[y]) + 1) {
					var color = settings_js.settings["files_highlight"][x]["color"];
					data = "<font color='" + color + "'>" + data + "</font>";
				}
		}
	}
	return data;
}
module.exports.Highlight_File = Highlight_File;




//------------   Highlight Text   ------------//
var Highlight = function (data) {
	for (var x=0; settings_js.settings["text_highlight"][x]; x++) {
		if (settings_js.settings["text_highlight"][x]["enabled"]) {
			var color = settings_js.settings["text_highlight"][x]["color"];
			var values = settings_js.settings["text_highlight"][x]["value"].split(",");
			for (var y=0; values[y]; y++)
				data = data.replace(new RegExp(values[y], 'g'), "<font color='" + color + "'>" + values[y] + "</font>");
		}
	}
	return data;
}
module.exports.Highlight = Highlight;
