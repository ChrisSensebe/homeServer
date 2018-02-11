import * as config from '../../config';
import axios from 'axios';

export const getStatus = (): Promise<any> => {
    const conf = config.getConfig();
    const url = `${conf.lightApi}${conf.lightApiUser}/lights`;
    return axios.get(url).then(res => res.data);
};