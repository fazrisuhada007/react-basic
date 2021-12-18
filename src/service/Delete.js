import axios from "axios";
import { OnlineRoot, RoothPath } from "./Config";

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? OnlineRoot : RoothPath}/${path}`).then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Delete;