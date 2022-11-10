
import mysql from 'mysql';

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "mynewpassword",
   database: 'dbportfolio'
})

db.connect((err) => {
  if(err) {
    console.log('Conexão falhou', err)
  } else {
    console.log('Conectado')
  }
})

export default db