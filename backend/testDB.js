const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./chinook/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  else console.log('Connected to the chinook database.');
});
 
let sql = `SELECT FirstName firstName,
                  LastName lastName,
                  Email email
            FROM customers
            WHERE Country = ?
            ORDER BY FirstName`;
 
db.each(sql, ['USA'], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
});
 
// close the database connection
db.close();