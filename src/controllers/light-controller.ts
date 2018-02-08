import * as lightService from '../services/light-service';

export const getLights = (req, res) => {
    lightService
        .getStatus()
        .then(status => res.json(status));
};