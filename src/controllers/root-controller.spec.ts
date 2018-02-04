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
});