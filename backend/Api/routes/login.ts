import express, { Request, Response, text } from "express";
import { LoginBody } from "../lib/connectionType";
const dbInteract = require("../services/dbInteract");
const bcrypt = require("bcrypt");
const router = express.Router();
router.use(express.json());

const _db = new dbInteract();
// documentation about the password verification
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

router.post("/", async (req: Request, res: Response) => {
    let theBody: LoginBody = req.body;
    const dbResponse: LoginBody[] = await _db.loginCredential(theBody.email);

    if (dbResponse.length === 0){
        res.status(400).send({
            success: false,
            message: "The password or email is incorrect",
        });
        return;
    }

    const passwordVerification = await bcrypt.compare(
        theBody.password,
        dbResponse[0].password
    );

    if (!passwordVerification){
        res.status(400).send({
            success: false,
            message: "The password or email is incorrect",
        });
        return;
    }

    res.send({ success: true, message: "You are logged !" });
});

module.exports = router;
