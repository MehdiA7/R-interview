import express, { Request, Response } from "express";
import { EmailExist, RegisterBody } from "../lib/connectionType";
import { logger } from "../middleware/logger";
const dbInteract = require("../services/dbInteract");
const bcrypt = require("bcrypt");
const router = express.Router();
router.use(express.json());

const _db = new dbInteract();

// documentation about the password hash
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

router.post("/", logger, async (req: Request, res: Response) => {
    const saltRounds = 10;
    let theBody: RegisterBody = req.body;

    if (
        !theBody.type ||
        !theBody.firstname ||
        !theBody.country ||
        !theBody.email ||
        !theBody.industry ||
        !theBody.phone ||
        !theBody.password ||
        theBody.policy === undefined
    ) {
        res.status(400).send({
            success: false,
            message: "All field is required",
        });
        return;
    }

    if (theBody.policy !== true) {
        res.status(400).send({
            success: false,
            message: "Policy is incorect, You need to accept the policy",
        });
        return;
    }

    const validTypes = ["Merchant", "Agent"];
    if (!validTypes.includes(theBody.type)) {
        res.status(400).send({
            success: false,
            message: "Type incorrect.",
        });
        return;
    }

    if (theBody.firstname.length < 3) {
        res.status(400).send({
            success: false,
            message: "Firstname is incorrect, 3char min",
        });
        return;
    }

    const validCountries = ["Belgium", "France", "Other"];
    if (!validCountries.includes(theBody.country)) {
        res.status(400).send({
            success: false,
            message: "Country is incorrect",
        });
        return;
    }

    const validIndustry = ["Finance", "Medical", "Auto", "Energy"];
    if (!validIndustry.includes(theBody.industry)) {
        res.status(400).send({
            success: false,
            message: "Industry is incorrect",
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(theBody.email)) {
        res.status(400).send({
            success: false,
            message: "Email format is invalid",
        });
        return;
    }


    if (theBody.password.length < 8) {
        res.status(400).send({
            success: false,
            message: "Password is incorrect, 8char min",
        });
        return;
    }

    const verifyEmail: EmailExist[] = await _db.emailExist(theBody.email);
    if (verifyEmail.length > 0) {
        res.status(409).send({
            success: false,
            message: "This email is taken",
        });
        return;
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(theBody.password, salt);
    theBody.password = hashedPassword;
    _db.createUser(theBody);

    res.status(201).send({
        success: true,
        message: `The user ${theBody.firstname} are created !`,
    });
    return;
});

module.exports = router;
