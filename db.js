import { createConnection } from "mysql";

export const dbProdConfig = {
//   user: "Tr@ck",
//   password: "W4@tM@tt3r5",
//   server: "65.99.209.53",
//   database: "GPS",
//   port: "1433"
 };

export const dbDevConfig = createConnection({
  host: 'localhost',
  user: "root",
  password: "Pepper00~~",
  server: "localhost",
  database: 'Taymor',
  options: {
    encrypt: true,
    port: "1433"
  }
});


// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Pepper00~~',
//   database: 'Taymor',

// });


// export const cpool = new mssql.connect(dbProdConfig)
// export const cpool = new mysql.connect(dbDevConfig)

// const cpool = process.env.NODE_ENV == 'dev' ? new mysql.connect(dbDevConfig): new mysql.connect(dbProdConfig)