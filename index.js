import express from "express";
import { Connection } from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js"; 
import cors from "cors";
import bodyParser from "body-parser";

const app= express();

dotenv.config();

app.use(bodyParser.json({
    extended: true
  }));
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(cors());
app.use('/',router);

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
Connection(username, password);



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server is up and running on port 3000");
});
