import * as mysql from 'mysql'



export function getProduitsListFromEvenement(idEvenement) {

let bd = mysql.createConnection({
    host     : 'devbdd.iutmetz.univ-lorraine.fr',
    database: 'steitz4u_Projet2Stage',
    user     : 'steitz4u_appli',
    password : '32001491',
    port : 3306
  });
    console.log(idEvenement);
    // connection.query(function(err) {
        // if (err) throw err;

        // connection.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL!"); });
        bd.query("SELECT Produits.id_produit, nom, prix FROM Produits, Contient WHERE Contient.id_evenement = "+idEvenement+" AND Contient.id_produit = Produits.id_produit;", function (err, result, fields) {
        console.log(fields);
        })
        // if (err) throw err;
        // return result;
        // });
    // });

    // connection.connect((err) => {
    //     if (err) {
    //       console.error('Error connecting to MySQL:', err);
    //       return;
    //     }
    //     console.log('Connected to MySQL database');
    // });
    // return [1,2,3];
/*
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT Produits.id_produit, nom, prix FROM Produits, Contient WHERE Contient.id_evenement = "+idEvenement+" AND Contient.id_produit = Produits.id_produit;", function (err, result, fields) {
        if (err) throw err;
        return result;
        });
    });*/

}
export {}