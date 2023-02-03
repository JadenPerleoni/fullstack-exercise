import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import users from "./routes/users.js";
import dotenv from "dotenv";
import path from "path"

dotenv.config();

const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/users", users);



app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const uri = `mongodb+srv://${dbUser}:${dbPassword}@fullstack-excersise.d8dsh10.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error));
