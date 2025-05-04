import express, { Request, Response } from "express";
import { authJwt } from "../middleware/authJwt";
import { logger } from "../middleware/logger";
const router = express.Router();
router.use(express.json());
const dbInteract = require("../services/dbInteract");
const _db = new dbInteract();


router.get("/", authJwt, logger, async (req: Request, res: Response) => {
    const allFirstname = await _db.getAllFirstName();

    if (allFirstname.length === 0) {
        res.status(400).send({ success: false, message: "No firstname..."});
        return;
    }

    res.send({ success: true, message: "Your users list !", content: allFirstname});

})

module.exports = router;
