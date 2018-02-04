import * as express from 'express';
import * as rootController from './controllers/root-controller';
import * as lightController from './controllers/light-controller';

const app = express();

app.get('/', rootController.getRoot);
app.get('/lights', lightController.getLights);

module.exports = app;