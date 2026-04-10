const request = require('supertest');
const app = require('../server/server');

describe('GET /products', () => {
  it('should return all products', async () => {
    const res = await request(app).get('/products');

    if (res.status === 200) {
      console.log('PASSED');
    } else {
      console.log('FAILED');
    }
  });
});
