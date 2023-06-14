import {connection} from "../api/connexion"

export function getBrasserieFromEvenement(idEvenement) {
    return new Promise((resolve, reject) => {
        connection.connect();
        this.connection.query("SELECT Brasserie.id_brasserie, Brasserie.nom, id_jeton FROM `Brasserie`,`Evenement`,`Participe` WHERE Evenement.id_evenement = "+idEvenement+" AND Evenement.id_evenement = Participe.id_evenement AND Brasserie.id_brasserie = Participe.id_evenement; ", (err, rows) => {
                if (err) {
            reject(err);
            } else {
                resolve(rows);
            }
        });
        connection.end();
    });
}
//SELECT id_brasserie, Brasserie.nom FROM `Brasserie`,`Evenement` WHERE id_evenement = 2; 