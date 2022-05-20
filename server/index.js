import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import colors from "colors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("app is running....");
});

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`App running on on port # ${PORT}`.green.inverse.bold)
);
