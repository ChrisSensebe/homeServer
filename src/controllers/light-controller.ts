import axios from 'axios';
import * as config from '../../config';

const conf = config.getConfig();
const API_URL = `${conf.lightApi}${conf.lightApiUser}/lights`;

export const getLights = async (req, res) => {
    const lights = await axios.get(API_URL).then(res => res.data);
    res.json(lights);
};