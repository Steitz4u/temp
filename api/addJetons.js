import {connection} from "../api/connexion"

export function addJetons(id, nb) {
    return new Promise((resolve, reject) => {
      let currentDate = new Date();
      let date = currentDate.getFullYear()+"-"+(currentDate.getMonth()+1).padStart(2,"0")+"-"+currentDate.getDate();
      let heure = currentDate.getHours().padStart(2,"0")+":"+currentDate.getMinutes().padStart(2,"0")+":00";
  
      connection.connect();
      this.connection.query("INSERT INTO `Jetons` (`id_jeton`, `nb_jetons`, `date`, `heure`) VALUES ('"+id+"', '"+nb+"', '"+date+"', '"+heure+"');", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
      connection.end();
    });
}