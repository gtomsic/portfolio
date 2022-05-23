const router = require("express").Router();

const { controllerCreateUser } = require("../controllers/controllerUser");

router.post("/", controllerCreateUser);

module.exports = router;
