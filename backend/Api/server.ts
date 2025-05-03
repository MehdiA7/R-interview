import express, { Request, Response } from "express";
import dotenv from "dotenv";
const cors = require("cors");

dotenv.config();
const app = express();

const PORT = process.env.PORT;

var corsOptions = {
    "origin": ["http://localhost:3000"],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

app.use(cors(corsOptions));

const registerRouter = require("./routes/register");

app.use("/register", registerRouter);

app.get("/", (request: Request, response: Response) => {
    response.status(200).send({ message: "The api work well !" });
});

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
