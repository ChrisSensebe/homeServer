import * as request from 'supertest';
import * as app from '../app';
import DoneCallback = jest.DoneCallback;
import {HTTP_STATUS_CODE} from '../utils/http-status-codes';

jest.mock('../../mocks/lights-api.mock');

describe('GET /lights', () => {
    it('should respond ok', (done: DoneCallback) => {
        request(app).get('/lights').expect(HTTP_STATUS_CODE.OK, done);
    });
    it('should respond with json', (done: DoneCallback) => {
        request(app)
            .get('/lights')
            .end((err, res) => {
                expect(res.type).toBe('application/json');
                done();
            });
    });
    it('sould respond with light status', (done: DoneCallback) => {
        request(app)
            .get('/lights')
            .end((err, res) => {
                expect(res.body['1']).toBeDefined();
                done();
            });
    });
});