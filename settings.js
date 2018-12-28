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
		if (setts.settings["files_highlight"][x]["enabled"]) {
			var values = setts.settings["files_highlight"][x]["value"].split(",");
			for (var y=0; values[y]; y++)
				if (data.indexOf(values[y]) + 1) {
					var color = setts.settings["files_highlight"][x]["color"];
					data = "<font color='" + color + "'>" + data + "</font>";
				}
		}
	}
	return data;
}
module.exports.Highlight_File = Highlight_File;




//------------   Highlight Text   ------------//
var Highlight = function (data) {
	var setts = require('./settings.js');
	for (var x=0; setts.settings["text_highlight"][x]; x++) {
		if (setts.settings["text_highlight"][x]["enabled"]) {
			var color = setts.settings["text_highlight"][x]["color"];
			var values = setts.settings["text_highlight"][x]["value"].split(",");
			for (var y=0; values[y]; y++)
				data = data.replace(new RegExp(values[y], 'g'), "<font color='" + color + "'>" + values[y] + "</font>");
		}
	}
	return data;
}
module.exports.Highlight = Highlight;
