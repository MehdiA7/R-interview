import express, { Request, Response } from "express";
const dbInteract = require("../services/dbInteract")
const bcrypt = require("bcrypt");
const router = express.Router();
router.use(express.json());

const _db = new dbInteract();

// I'm stopped here. The doc
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

router.post("/register", async ( req: Request, res: Response) => {
    const saltRounds = 10;
    let theBody = req.body;

    await bcrypt.genSalt(saltRounds, (err: string, salt: string) => {
        if (err) {
            console.log("No salt... : ", err);
            return;
        }
        
        bcrypt.hash(theBody.password, salt, (error: string, hash: string) => {
            if (error) {
                console.log(error)
                return;
            }
            theBody.password = hash;
            console.log('Body password : ', theBody.password, 'the hashed password : ', hash);
        });
        
    });
    await _db.createUser(theBody);
    res.send({message: `The user ${theBody.firstname} are created !`});
    
});

module.exports = router;
