import express, { Request, Response, text } from "express";
import { EmailExist, RegisterBody } from "../lib/connectionType";
const dbInteract = require("../services/dbInteract");
const bcrypt = require("bcrypt");
const router = express.Router();
router.use(express.json());

const _db = new dbInteract();

// documentation about the password hash
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

router.post("/", async (req: Request, res: Response) => {
    const saltRounds = 10;
    let theBody: RegisterBody = req.body;

    const verifyEmail: EmailExist[] = await _db.emailExist(theBody.email);

    if (verifyEmail.length > 0) {
        res.status(409).send({ success: false, message: 'This email is taken !'});
    return;
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(theBody.password, salt);
    theBody.password = hashedPassword;
    _db.createUser(theBody);
    
    res.status(201).send({ success: true, message: `The user ${theBody.firstname} are created !` });
});

module.exports = router;
