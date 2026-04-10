const { exec } = require('child_process');

exec('npm test', (err) => {
  const result = err ? 'FAILED' : 'PASSED';

  console.log(
    'abou0228@algonquinlive.com - getAll to show all product - 200 - ' + result
  );
});
