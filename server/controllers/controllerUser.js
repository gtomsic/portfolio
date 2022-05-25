const brcrypt = require("bcryptjs");
const Op = require("sequelize").Op;
const asyncHandler = require("express-async-handler");
const db = require("../models");

module.exports = {
    // USER LOGIN /api/users/login
    // PUBLIC POST
    controllerLoginUser: asyncHandler(async (req, res) => {
        const { username, password, secret } = req.body;
        try {
            if (secret === process.env.SECRET_KEY) {
                const user = await db.user.findOne({
                    where: {
                        [Op.or]: [{ email: username }, { username: username }],
                    },
                });
                const checkPassword = brcrypt.compareSync(
                    password,
                    user.password
                );
                if (checkPassword) {
                    const getUser = await db.user.findOne({
                        where: {
                            [Op.or]: [
                                { email: username },
                                { username: username },
                            ],
                        },
                        attributes: { exclude: ["password"] },
                    });
                    req.user = getUser;
                    return res.status(200).json(getUser);
                } else {
                    throw new Error("Not authorized");
                }
            } else {
                throw new Error("Not authorized");
            }
        } catch (error) {
            throw new Error("Server error");
        }
    }),
    // CREATE USER /api/users
    // PUBLIC POST
    controllerCreateUser: asyncHandler(async (req, res) => {
        const { email, password, secret } = req.body;
        try {
            if (secret === process.env.SECRET_KEY) {
                const hasPass = brcrypt.hashSync(password, 10);
                const checkUser = await db.user.findOne({
                    where: { email },
                    attributes: { exclude: ["password"] },
                });
                if (checkUser) {
                    return res.send(checkUser);
                }
                await db.user.create({
                    ...req.body,
                    password: hasPass,
                });
                const user = await db.user.findOne({
                    where: { email },
                    attributes: { exclude: ["password"] },
                });
                res.status(201).send(user);
            }
        } catch (error) {
            console.log(error);
            throw new Error("Server error");
        }
    }),
};
