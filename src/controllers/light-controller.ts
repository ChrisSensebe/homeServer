import * as lightService from '../services/light-service';

export const getLights = async (req, res) => {
    const lights = await lightService.getStatus();
    res.json(lights);
};