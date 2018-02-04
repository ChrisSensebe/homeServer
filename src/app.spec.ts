import * as request from 'supertest';
import * as app from './app';
import {HTTP_STATUS_CODE} from './utils/http-status-codes';

describe('GET /', () => {
    it('should return 200', done => {
        request(app).get('/').expect(HTTP_STATUS_CODE.OK, done);
    });
});