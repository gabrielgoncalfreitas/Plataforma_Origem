import axios from "axios";

export default function requestPost(route, data) {
    return new Promise((resolve, reject) => {
        axios.post(route, data).then(function (res) {
            resolve(res.data);
        }).catch(function (error) {
            reject(error);
        });
    });
}