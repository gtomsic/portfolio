module.exports = {
    controllerCreateUser: (req, res) => {
        res.send(req.body);
        console.log(req.body);
    },
};
