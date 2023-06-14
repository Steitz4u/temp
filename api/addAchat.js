import {connection} from "../api/connexion"

export function addAchat(idEvenement,tableProduits,nb) {
  return new Promise((resolve, reject) => {
    let currentDate = new Date();
    let date = currentDate.getFullYear()+"-"+(currentDate.getMonth()+1).padStart(2,"0")+"-"+currentDate.getDate();
    let heure = currentDate.getHours().padStart(2,"0")+":"+currentDate.getMinutes().padStart(2,"0")+":00";

    connection.connect();
    this.connection.query("BEGIN; INSERT INTO `Achat` (`id_achat`, `id_evenement`, `date`, `heure`) VALUES (NULL, '"+idEvenement+"', '"+date+"', '"+heure+"'); SELECT LAST_INSERT_ID(); ", (err, result) => {
      if (err) {
        reject(err);
      } else {
        let rqt = "";
        tableProduits.forEach((item) => {
          rqt += "('"+result+"', '"+item+"', NULL)"
        })
        this.connection.query("INSERT INTO `Detail` (`id_achat`, `id_prod`, `nb`) VALUES ('1', '"+idProd+"', '"+nb+"');", (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      }
    });
    connection.end();
  });
}