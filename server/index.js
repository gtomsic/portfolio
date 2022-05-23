require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const colors = require("colors");

const db = require("./models");
const {
    errorHandler,
    notFound,
} = require("./middlewares/middlewareErrorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running...");
});

const userRoute = require("./routes/routeUser");
const messageRoute = require("./routes/routeMessage");

app.use("/api/users", userRoute);
app.use("/api/message", messageRoute);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

db.sequelize
    .sync()
    .then(() =>
        server.listen(
            PORT,
            console.log(`App running on on port # ${PORT}`.green.inverse.bold)
        )
    );
