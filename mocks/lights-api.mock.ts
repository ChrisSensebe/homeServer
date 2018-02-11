import * as fs from 'fs';

declare var Promise: any;

export const getLights = url => new Promise((resolve, reject) => {
    const mockedResponse = './get-lights.json';
    fs.readFile(mockedResponse, 'utf-8', (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(JSON.parse(data));
    });
});