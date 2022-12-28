const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");


const pool = new Pool({
  user: "Jadem",
  database: "members",
  password: "swaggoat12",
  port: 5432,
  host: "localhost",
});

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/create_user", (req, res) => {
  username = req.body.username;
  password = req.body.password;

  console.log(username);
  console.log(password);


  if (!username) return res.status(400).json("Username cant be blank");
  if (!password) return res.status(400).json("Password cant be blank");


  pool.query("INSERT INTO users (name, password) VALUES ($1, $2) ", [username,password], function (err, rows) {
    if (err) {
      res.status(400).json("Unable to add");
      console.log("Error inserting : %s ", err);
    } else {
      res.status(200).json("User added succesfully");
    }
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
