//     OS     //
//  'darwin', 'freebsd', 'linux', 'sunos' or 'win32'. //
var pach_separator = "/";
var pach_root = "/";
var os = require('os');
var platform = os.platform();
if (platform == 'win32') {
	pach_separator = "\\";
	pach_root = "C:\\";
}


//			J S O N			//
function ToJson (data) {return JSON.stringify(data);}
function FromJson (data) {return JSON.parse(data);}
