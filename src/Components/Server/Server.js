import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

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
  res.send("Dantte's DB");
});

app.get("/api/users", (req, res) => {
  let query = "SELECT * FROM users";

  connection.query(query, (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      res.send(resp);
    }
  });
});
app.post("/api/login", (req, res) => {

  let { user, password } = req.body;

  let query =
  "SELECT * FROM users WHERE (user ='" +
  user +
  "') AND (pass ='" +
  password +
  "')";

connection.query(query, (err, resp) => {
  if (err) {
    console.log(err);
  } else {
    res.send(resp);
  }
});
});

app.post("/api/users", (req, res) => {

  let { user, password } = req.body;

  let query1 = "SELECT * FROM users WHERE (user = '" + user + "')";

  connection.query(query1, (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      if (resp.length === 0) {
        let query =
          "INSERT INTO `tienda`.`users` (`user`, `pass`) VALUES ('" +
          user +
          "', '" +
          password +
          "');";

        connection.query(query, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            res.send(resp);
          }
        });
      } else {
        res.send("User is already registered");
      }
    }
  });
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log("server is listening...");
});
