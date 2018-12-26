//			J S O N			//
function ToJson (data) {return JSON.stringify(data);}
function FromJson (data) {return JSON.parse(data);}


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


//      Shell Exec      //
function RunExec (comm) {
  var comm = comm || 'date';
  const { exec } = require('child_process');
  exec(comm, (err, stdout, stderr) => {
    //if (err) return;
    if (typeof ExecReturn === "function") ExecReturn (stdout);
  });
}

var exec_running;
function RunSpawn (comm) {
  var command = comm.split(' ')[0];
  var args = comm.split(' ');
  args.splice(0, 1);

  var spawn = require('child_process').execFile;
  exec_running = spawn(command, args);
  exec_running.stdout.on('data', function(data) {
      console.log('stdout: ' + data);
      //Here is where the output goes
      if (typeof ExecReturn === "function") ExecReturn (data);
  });
  exec_running.stderr.on('data', function(data) {
      console.log('stderr: ' + data);
      //Here is where the error output goes
  });
  exec_running.on('close', function(code) {
      console.log('closing code: ' + code);
      //Here you can get the exit code of the script
  });
}
function StopSpawn () {
  exec_running.kill('SIGHUP');
  if (typeof ExecReturn === "function") ExecReturn ("STOPED");
}





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
