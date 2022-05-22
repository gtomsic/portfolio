const router = require("express").Router();

const { controllerMessage } = require("../controllers/controllerMessage");

router.post("/", controllerMessage);

module.exports = router;
