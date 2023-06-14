import {connection} from "../api/connexion"

export function createEvenement(nom,dateDeb,dateFin) {
    return new Promise((resolve, reject) => {
        connection.connect();
        this.connection.query("INSERT INTO `Evenement` (`id_evenement`, `nom`, `date_deb`, `date_fin`) VALUES (NULL, '"+nom+"', '"+dateDeb+"', '"+dateFin+"');", (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
        connection.end();
    });
}