const { exec } = require('child_process');

function runTest(label, command) {
  return new Promise(resolve => {
    console.log(`\n=== Running: ${label} ===`);
    exec(command, (err, stdout, stderr) => {
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
      resolve();
    });
  });
}

async function runAll() {
  // My test
  await runTest("Hassan's Test", "npm test");

}

runAll();
