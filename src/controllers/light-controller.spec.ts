import * as request from 'supertest';
import * as app from '../app';
import DoneCallback = jest.DoneCallback;
import {HTTP_STATUS_CODE} from '../utils/http-status-codes';

describe('GET /lights', () => {
    it('should respond ok', (done: DoneCallback) => {
        request(app).get('/lights').expect(HTTP_STATUS_CODE.OK, done);
    });
});