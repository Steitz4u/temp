import {connection} from "../api/connexion"

export function getEvenementList() {
    return new Promise((resolve, reject) => {
        connection.connect();
        this.connection.query("SELECT * FROM `Evenement`;", (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        connection.end();
    });
}