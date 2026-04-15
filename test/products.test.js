const request = require('supertest');
const app = require('../server/server');

(async () => {
  const email = "abou0228@algonquinlive.com";
  const testName = "getAll to show all product";

  try {
    const res = await request(app).get('/products');
    const status = res.status;
    const result = status === 200 ? "PASSED" : "FAILED";

    console.log(`${email} - ${testName} - ${status} - ${result}`);
  } catch (err) {
    console.log(`${email} - ${testName} - ERROR - FAILED`);
  }

  process.exit();
})();