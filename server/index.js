require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");

const app = express();

app.use(cors());
app.use(express.json());

const messageRoute = require("./routes/routeMessage");

app.use("/api/message", messageRoute);

app.get("/", (req, res) => {
    res.send("app is running....");
});

const PORT = process.env.PORT || 8000;

app.listen(
    PORT,
    console.log(`App running on on port # ${PORT}`.green.inverse.bold)
);
