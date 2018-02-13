import * as express from 'express';
import * as rootController from './controllers/root-controller';
import * as lightController from './controllers/light-controller';
import {LightBridgeController} from './controllers/light-bridge-controller';

const app = express();

app.get('/', rootController.getRoot);
app.get('/lights', lightController.getLights);

const lightBridgeController = new LightBridgeController();
lightBridgeController.watchLightBridge();

module.exports = app;