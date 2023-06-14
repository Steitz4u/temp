import {connection} from "../api/connexion"

export function addBrasserie(nom,adresse,mail,telephone,nationalite,contact) {
    return new Promise((resolve, reject) => {
      connection.connect();
      this.connection.query("INSERT INTO `Brasserie` (`id_brasserie`, `nom`, `adresse`, `mail`, `telephone`, `nationalite`, `contact`) VALUES (NULL, '"+nom+"', '"+adresse+"', '"+mail+"', '"+telephone+"', '"+nationalite+"', '"+contact+"');", (err, rows) => {
          if (err) {
              reject(err);
          } else {
              resolve(rows);
          }
      });
      connection.end();
    });
}