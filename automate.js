const { exec } = require('child_process');
const app = require('./server/server');

const PORT = process.env.PORT || 4000;
let server;

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
  console.log(`Starting server on port ${PORT}...`);

  server = app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);

    // My test
    await runTest("Hassan's Test", "npm test");

    // Flavia's test
    await runTest("Flavia's Test", "node flavia.js");

    server.close(() => {
      console.log("Server stopped after tests");
    });
  });
}

runAll();
