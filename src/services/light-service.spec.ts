import * as lightService from './light-service';

describe('light get status service', () => {
    it('should return a response', () => {
        expect(lightService.getStatus()).toBeDefined();
    });
});