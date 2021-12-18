import axios from 'axios';
import { OnlineRoot, RoothPath } from './Config';

const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RoothPath}/${path}`)
            .then((result) => {
                resolve(result.data);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default Get;