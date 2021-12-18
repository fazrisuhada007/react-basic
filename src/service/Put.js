import axios from "axios";
import { OnlineRoot, RoothPath } from "./Config";

const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlineRoot : RoothPath}/${path}`, data).then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise
}

export default Put;