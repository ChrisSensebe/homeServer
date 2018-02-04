import * as express from 'express';

const app = express();

app.get('/', (req, res, next) => res.end('hello world'));

module.exports = app;