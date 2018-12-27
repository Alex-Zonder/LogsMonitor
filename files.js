//      Read File      //
function ReadFileSync (file) {
  var fs = require('fs');
  return fs.readFileSync(file, 'utf8');
}





/*function ReadDirSynk(folder) {
  var folder =  folder || './';
  const fs = require('fs');
  fs.readdirSync(folder).forEach(file => {
    File_Manager.innerHTML += file + "<br>";
  })
  if (fs.existsSync(folder)) {
    File_Manager.innerHTML += "<hr>Done reading files.";
  }
}*/


function ReadDirToArraySync (pach,callback) {
	var pach =  pach || './';
	var files = [];
	const fs = require('fs');
	fs.readdirSync(pach).forEach(file => {
		var isFile = fs.lstatSync(pach+file).isFile();
		files.push({"pach":pach,"name":file,"isFile":isFile});
	});
	if (fs.existsSync(pach)) {
		callback(files);
	}
}
