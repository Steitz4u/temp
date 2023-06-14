import {connection} from "../api/connexion"

export function modifieBrasserie(id,nom,adresse,mail,telephone,nationalite,contact) {
    return new Promise((resolve, reject) => {
      connection.connect();
      this.connection.query("UPDATE `Brasserie` SET `nom` = '"+nom+"', `adresse` = '"+adresse+"', `mail` = '"+mail+"', `telephone` = '"+telephone+"', `nationalite` = '"+nationalite+"', `contact` = '"+contact+"' WHERE `Brasserie`.`id_brasserie` = "+id+"; ", (err, rows) => {
          if (err) {
              reject(err);
          } else {
              resolve(rows);
          }
      });
      connection.end();
    });
}