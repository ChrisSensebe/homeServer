import * as express from 'express';
import * as rootController from './controllers/root-controller';

const app = express();

app.get('/', rootController.getRoot);

module.exports = app;