//------------   Load Setts From File   ------------//
var settings = FromJson(ReadFileSync("./settings.json"));
module.exports.settings = settings;
//------------   Save Setts From File   ------------//
function SaveSettings () {
	var setts = require('./settings.js');
	WriteFileSync("./settings.json",ToJson(setts.settings));
}




//------------   Highlight Files   ------------//
var Highlight_File = function (data) {
	var setts = require('./settings.js');
	for (var x=0; setts.settings["files_highlight"][x]; x++) {
		if (data.indexOf(setts.settings["files_highlight"][x]["value"]) + 1)
			data = "<font color='" + setts.settings["files_highlight"][x]["color"] + "'>" + data + "</font>";
	}
	return data;
}
module.exports.Highlight_File = Highlight_File;




//------------   Highlight Text   ------------//
var Highlight = function (data) {
	var setts = require('./settings.js');
	for (var x=0; setts.settings["text_highlight"][x]; x++) {
		if (setts.settings["text_highlight"][x]["enabled"]) {
			var value = setts.settings["text_highlight"][x]["value"];
			var color = setts.settings["text_highlight"][x]["color"];
			data = data.replace(new RegExp(value, 'g'), "<font color='" + color + "'>" + value + "</font>");
		}
	}
	return data;
}
module.exports.Highlight = Highlight;
