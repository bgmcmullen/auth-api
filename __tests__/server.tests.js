'use strict';

process.env.SECRET = "TEST_SECRET";

const { db } = require('../src/models/index.js');
const supertest = require('supertest');
const server = require('../src/server.js').server;

const mockRequest = supertest(server);

let userData = {
  testUser: { username: 'user', password: 'password' },
};
let accessToken = null;

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Auth Router', () => {

  it('Can create a new user', async () => {

    const response = await mockRequest.post('/api/v1/signup').send(userData.testUser);
    const userObject = response.body;

    expect(response.status).toBe(201);
    expect(userObject.token).toBeDefined();
    expect(userObject.user.id).toBeDefined();
    expect(userObject.user.username).toEqual(userData.testUser.username);
  });
});