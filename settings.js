//------------   Load Setts From File   ------------//
var settings = FromJson(ReadFileSync("./settings.json"));
module.exports.settings = settings;




//------------   Hilight Files (String)   ------------//
var Hilight_File = function (data) {
	for (var x=0; settings["files_hilight"][x]; x++) {
		if (data.indexOf(settings["files_hilight"][x]["value"]) + 1)
			data = "<font color='" + settings["files_hilight"][x]["color"] + "'>" + data + "</font>";
	}

	return data;
}
module.exports.Hilight_File = Hilight_File;


//------------   Hilight Text   ------------//
var Hilight = function (data) {
  // Red //
  var data_red = document.getElementById("Input_Hilight_Red").value;
  if (data_red != "")
    data = data.replace(new RegExp(data_red, 'g'), "<font color='red'>" + data_red + "</font>");

  // Green //
  var data_green = document.getElementById("Input_Hilight_Green").value;
  if (data_green != "")
    data = data.replace(new RegExp(data_green, 'g'), "<font color='green'>" + data_green + "</font>");

  // Yellow //
  var data_yellow = document.getElementById("Input_Hilight_Yellow").value;
  if (data_yellow != "")
    data = data.replace(new RegExp(data_yellow, 'g'), "<font color='yellow'>" + data_yellow + "</font>");

  return data;
}
module.exports.Hilight = Hilight;
