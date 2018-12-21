//      File Manager      //
function ReadFileSync (file) {
  var fs = require('fs');
  return fs.readFileSync(file, 'utf8');
}



//      Shell Exec      //
function RunExec (comm) {
  var comm = comm || 'date';
  const { exec } = require('child_process');
  exec(comm, (err, stdout, stderr) => {
    if (err) return;
    if (typeof ExecReturn === "function") ExecReturn (stdout);
  });
}
