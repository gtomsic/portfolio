const { sendEmail } = require("../utils/nodemailer");

module.exports = {
    controllerMessage: async (req, res) => {
        try {
            const { name, company, email, message } = req.body;
            await sendEmail(name, company, email, message);
            res.status(201).send(req.body);
        } catch (error) {
            console.log(error);
            send.status(500).send("Server Error");
        }
    },
};
