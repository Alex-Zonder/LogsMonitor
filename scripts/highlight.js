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
//module.exports.Highlight_File = Highlight_File;




//------------   Highlight Text   ------------//
var Highlight = function (data) {
	for (var x=0; settings_js.settings["text_highlight"][x]; x++) {
		if (settings_js.settings["text_highlight"][x]["enabled"]) {
			var color = settings_js.settings["text_highlight"][x]["color"];
			var values = settings_js.settings["text_highlight"][x]["value"].split(",");
			for (var y=0; values[y]; y++)
				//data = data.replace(new RegExp(values[y], 'g'), "<font color='" + color + "'>" + values[y] + "</font>");
				data = HighLightText (data,values[y],color);
		}
	}
	return data;
}
//module.exports.Highlight = Highlight;


var HighLightText = function (data,to_highlight,color) {
	return data.replace(new RegExp(to_highlight, 'g'), "<font color='" + color + "'>" + to_highlight + "</font>");
}

// '[“"].*?["”]'
/*var HighLightStringDouble = function (data, color) {
	data = data.replace(new RegExp(values[y], 'g'), "<font color='" + color + "'>" + values[y] + "</font>");
}*/
