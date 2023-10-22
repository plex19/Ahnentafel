const sqlite3 = require("sqlite3").verbose();
const path = require("path");
var db;

export function GetUsers() {

  let dbname = "mydatabase.db";
  const dbPath = path.join(__dirname, '../backend/db/', dbname);
  const db = new sqlite3.Database(dbPath);

  const tBodyUsers = document.getElementById("tbUsers"); 

  const usersId = document.getElementById("TbUsersId"); 
  const usersUser = document.getElementById("TbUsersUser");
  const usersPassword = document.getElementById("TbUsersPassword");

  let stmt = `SELECT * FROM Users`;
  
  CheckDatabaseConnection(dbPath);

  db.all(stmt, [], (err, rows) => {
    if (err) {
      throw err;
    }

    while (tBodyUsers.rows.length > 1) {
      tBodyUsers.deleteRow(1);
    }
  
    rows.forEach((row) => {
      const newRow = tBodyUsers.insertRow();
      
      const userIdCell = newRow.insertCell(0);
      const userUserCell = newRow.insertCell(1);
      const userPasswordCell = newRow.insertCell(2);
  
      userIdCell.innerHTML = row.Id;
      userUserCell.innerHTML = row.Username;
      userPasswordCell.innerHTML = row.Password;
  
      console.log(row.Id, row.Username, row.Password);
    });
  });
  db.close();
}

export function CheckDatabaseConnection(dbPath) {
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    } else {
      console.log('Connected to the database');
    }
  });
  db.close();
}

// export function CreateDatabase(dbPath) {
//   const db = new sqlite3.Database(dbPath);
//   return db;
// }

// export function ErrorDatabaseConnection(database) {
//   database.on("error", (err) => {
//     console.error("Error connecting to the database:", err);
//   });
// }

// export function OpenDatabaseConnection(database) {
//   database.on("open", () => {
//     console.log("Database connection successful.");
//   });
// }

// export function CloseDatabaseConnection(database) {
//   database.close((err) => {
//     if (err) {
//       console.error("Error closing database:", err);
//     } else {
//       console.log("Database connection closed.");
//     }
//   });
// }
