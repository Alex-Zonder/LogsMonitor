//      File Manager      //
function ReadFileSync (file) {
  var fs = require('fs');
  return fs.readFileSync(file, 'utf8');
}



//      Shell Exec      //
function RunExec () {
  const { exec } = require('child_process');
  exec('date', (err, stdout, stderr) => {
    if (err) {
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    ExecReturn (`stdout: ${stdout}`);
  });
}
