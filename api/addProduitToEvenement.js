import {connection} from "../api/connexion"

export function addProduitToEvenement(idEvenement,tableProduits) {
    return new Promise((resolve, reject) => {
      if(Array.isArray(tableBrasserie)){
        let rqt = "";
        tableBrasserie.forEach((item) => {
          rqt += "('"+idEvenement+"', '"+tableProduits+"', NULL)"
        })
  
        connection.connect();
        this.connection.query("INSERT INTO `Contient` (`id_evenement`, `id_produit`) VALUES "+rqt+";", (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
        connection.end();
      }else{
        reject("not a Table")
      }
    });
}