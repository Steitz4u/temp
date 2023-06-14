import {connection} from "../api/connexion"

export function connectCompte() {
    return new Promise((resolve, reject) => {
      connection.connect();
      this.connection.query('SELECT * FROM Question ORDER BY RAND() LIMIT 20', (err, rows) => {
          if (err) {
              reject(err);
          } else {
              resolve(rows);
          }
      });
      connection.end();
    });
}