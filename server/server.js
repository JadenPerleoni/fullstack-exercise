import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import users from "./routes/users.js";




const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/users", users);

const uri =
  "mongodb+srv://jadenperleoni:swaggoat12@fullstack-excersise.d8dsh10.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error));
