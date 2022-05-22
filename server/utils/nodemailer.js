"use strict";
const nodemailer = require("nodemailer");

module.exports = {
    sendEmail: async (name, company, email, message) => {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.MAIL_HOST, // localhost if in cpanel server
            port: 465,
            secure: true, // use TLS
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        });
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `${name} <${email}>`, // sender address
            to: process.env.MAIL_USER, // list of receivers
            subject: `${company} | gabrieltomsic.com`, // Subject line
            html: `<p>${message}</p>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    },
};
