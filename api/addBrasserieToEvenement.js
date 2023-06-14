import {connection} from "../api/connexion"

export function addBrasserieToEvenement(idEvenement, tableBrasserie) {
    return new Promise((resolve, reject) => {
      if(Array.isArray(tableBrasserie)){
        let rqt = "";
        tableBrasserie.forEach((item) => {
          rqt += "('"+item+"', '"+idEvenement+"', NULL)"
        })
  
        connection.connect();
        this.connection.query("INSERT INTO `Participe` (`id_brasserie`, `id_evenement`, `id_jeton`) VALUES "+rqt+";", (err, rows) => {
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
  