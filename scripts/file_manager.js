var fs = require('fs');

//      Read File      //
function ReadFileSync (file) {
	return fs.readFileSync(file, 'utf8');
}

//      Write File      //
function WriteFileSync (file, data) {
	fs.writeFileSync(file, data);
}




function ReadDirToArraySync (pach,callback) {
	var pach =  pach || './';
	var files = [];
	fs.readdirSync(pach).forEach(file => {
		var isFile = fs.lstatSync(pach+file).isFile();
		files.push({"pach":pach,"name":file,"isFile":isFile});
	});
	if (fs.existsSync(pach)) {
		callback(files);
	}
}
