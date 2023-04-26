import express from "express";
import mysql from "mysql";

const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nacho2112",
  database: "tienda",
});

connection.connect((error) => {
  if (error) {
    console.log("Error de conección: " + error);
  } else {
    console.log("Coneccion a base de datos exitosa");
  }
});

app.get("/", (req, res) => {
  res.send("asdasdas tienda");
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log("server is listening...");
});
