var mysql      = require('mysql2');
var db = mysql.createConnection({
  host     : '127.0.0.1',
  port: '3306',
  user     : 'root',
  password : '',
  database: 'shadowhunter'
});
// connection.connect()

db.connect( function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:"); throw err; 
    } else { 
        console.log("Connection established."); 
    } 
});

// export default db;
module.exports = db;