import * as lightService from './light-service';

jest.mock('../../mocks/lights-api.mock');

describe('light get status service', () => {
    it('should return a response', () => {
        expect(lightService.getStatus()).toBeDefined();
    });
});