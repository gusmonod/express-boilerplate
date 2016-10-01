import test from 'ava';
import request from 'supertest';
import app from '../dist/app';

test('indexRoute', async (t) => {
  const res = await request(app).get('/');
  t.is(200, res.status);
  t.is('Hello, world!', res.text);
});
