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

var Hilight_File = function (data) {
  // Red //
  var data_red = document.getElementById("Input_Hilight_Files_Red").value;
  if (data_red != "")
    data = data.replace(new RegExp(data_red, 'g'), "<font color='red'>" + data_red + "</font>");

  // Green //
  var data_green = document.getElementById("Input_Hilight_Files_Green").value;
  if (data_green != "")
    data = data.replace(new RegExp(data_green, 'g'), "<font color='green'>" + data_green + "</font>");

  // Yellow //
  var data_yellow = document.getElementById("Input_Hilight_Files_Yellow").value;
  if (data_yellow != "")
    data = data.replace(new RegExp(data_yellow, 'g'), "<font color='yellow'>" + data_yellow + "</font>");

  return data;
}
