const router = require("express").Router();

const {
    controllerCreateUser,
    controllerLoginUser,
} = require("../controllers/controllerUser");

router.post("/", controllerCreateUser);
router.post("/login", controllerLoginUser);

module.exports = router;
