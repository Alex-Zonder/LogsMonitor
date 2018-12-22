//      Shell Exec      //
function RunExec (comm) {
  var comm = comm || 'date';
  const { exec } = require('child_process');
  exec(comm, (err, stdout, stderr) => {
    //if (err) return;
    if (typeof ExecReturn === "function") ExecReturn (stdout);
  });
}




//      Read File      //
function ReadFileSync (file) {
  var fs = require('fs');
  return fs.readFileSync(file, 'utf8');
}




//      Read Dir      //
function ReadDir (folder) {
  var folder =  folder || './';
  const fs = require('fs');
  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      console.log(file);
      File_Manager.innerHTML += file + "<br>";
    });
  })
}

function ReadDirSynk(folder) {
  var folder =  folder || './';
  const fs = require('fs');
  fs.readdirSync(folder).forEach(file => {
    console.log(file);
    File_Manager.innerHTML += file + "<br>";
  })
}
