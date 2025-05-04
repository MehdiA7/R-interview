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

});

module.exports = router;
