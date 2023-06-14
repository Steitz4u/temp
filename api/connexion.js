//const mysql = require('mysql');
import mysql from 'mysql'

var connection = mysql.createConnection({
  host     : 'devbdd.iutmetz.univ-lorraine.fr',
  data_base: 'steitz4u_Projet2Stage',
  user     : 'steitz4u_appli',
  password : '32001491'
});
