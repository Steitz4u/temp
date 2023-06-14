import {connection} from "../api/connexion"

export function addProduit(nom, prix) {
    return new Promise((resolve, reject) => {
      connection.connect();
      this.connection.query("INSERT INTO `Produits` (`id_produit`, `nom`, `prix`) VALUES (NULL, '"+nom+"', '"+prix+"');", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
      connection.end();
    });
}