import * as request from 'supertest';
import * as app from '../app';
import DoneCallback = jest.DoneCallback;

describe('GET /', () => {
    it('should respond with json', (done: DoneCallback) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.type).toBe('application/json');
                done();
            });
    });
    it('should respond with welcome message', (done: DoneCallback) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.body.message).toBe('welcome to home server');
                done();
            });
    });
});