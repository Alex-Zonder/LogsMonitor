var settings_js = require('./settings.js');
// ------------   Working whith file   ------------ //
function HtmlToText (data) {
	data = data.replace(new RegExp('<','g'), "&lt");
	data = data.replace(new RegExp('\r?\n','g'), "<br>");
	data = data.replace(new RegExp(" ",'g'), "&nbsp;");
	data = data.replace(new RegExp("\t",'g'), "&nbsp;&nbsp;&nbsp;&nbsp;");
	return data;
}

function OpenFile (pach,file) {
	Head_Files_File.innerHTML = Highlight_File(file);

	// Open file //
	var data = ReadFileSync (pach + file);

	// Calc file //
	var file_lenght = data.length;
	var str_counter = data.split('\n').length;

	data = HtmlToText(data);

	// View file //
	File_Bowser.innerHTML = Highlight(data);
	//File_Bowser_Textarea.innerHTML = data;

	// View file info //
	if (file_lenght<1024) file_lenght += " Б";
	else if (file_lenght<1024*1024) file_lenght = (file_lenght / 1024).toFixed(2) + " кБ";
	else if (file_lenght<1024*1024*1024) file_lenght = (file_lenght / 1024 / 1024).toFixed(2) + " мБ";
	File_Info_File.innerHTML = "Строк: " + str_counter + " | Размер: " + file_lenght;
}





// ------------   Working whith dir   ------------ //
function DrawBreadroom (pach) {
	var dirs = pach.split(pach_separator);
	var pach = pach_root;
	var html = "<div class='Bread' onclick='OpenDir(\"" + pach + "\")'>" +pach_root + "</div>";
	for (var x=1; dirs[x]; x++) {
		pach += dirs[x] + pach_separator;
		html += "<div class='Bread' onclick='OpenDir(\"" + pach + "\")'>" + dirs[x];
		if (dirs[x + 1]) html += pach_separator;
		html += "</div>";
	}
	document.getElementById("Head_Files").innerHTML = html;
}

function DrawDir (pach,dir) {
	var html = "<nobr><div class='Directory' onclick=\"OpenDir(\'" + pach + dir + "/\')\">";
	html += "<img src='./images/folder-2.png' height='16'style='margin: 3px 2px -3px 2px;'>" + dir + '</div></nobr>';
	File_Manager.innerHTML += html;
}

function DrawFile (pach,file) {
	var html = "<nobr><div class='File' onclick=\"OpenFile(\'" + pach + "\',\'" + file + "\')\">";
	html += "<img src='./images/file-2.png' height='16'style='margin: 3px 6px -3px 6px;'>" + Highlight_File (file) + '</div></nobr>';
	File_Manager.innerHTML += html;
}

var root_pach = __dirname + pach_separator;
var pach = root_pach;
function OpenDir (pach) {
	File_Manager.innerHTML = "";
	ReadDirToArraySync (pach, function (files) {
		DrawBreadroom (pach);
		var dirs_counter = 0;
		for (var x=0; files[x]; x++) {
			if (!files[x]['isFile']) {
				DrawDir (pach,files[x]['name']);
				dirs_counter++;
			}
		}
		var files_counter = 0;
		for (var x=0; files[x]; x++) {
			if (files[x]['isFile']) {
				DrawFile (pach,files[x]['name']);
				files_counter++;
			}
		}
		File_Info_Dir.innerHTML = "Папок: " + dirs_counter + " | Файлов: " + files_counter;
	});
}
window.addEventListener('DOMContentLoaded', function() {OpenDir(pach);});
