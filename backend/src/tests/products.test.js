const request = require('supertest');
const express = require('express');
const productRoutes = require('../routes/products');

const app = express();
app.use('/api/products', productRoutes);

describe('Products API', () => {
  it('should return a list of products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0]).toHaveProperty('name', 'Laptop');
  });
});
