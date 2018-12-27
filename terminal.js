//      Shell Exec      //
function RunExec (comm) {
	var comm = comm || 'date';
	const { exec } = require('child_process');
	exec(comm, (err, stdout, stderr) => {
		//if (err) return;
		if (typeof ExecReturn === "function") ExecReturn (stdout);
	});
}




//      Shell Spawn      //
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
