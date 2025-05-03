import express, { Request, Response } from "express";
import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

const registerRouter = require("./routes/register");

app.use("/", registerRouter);

app.get("/", (request: Request, response: Response) => {
    response.status(200).send({ message: "The api work well !"});
});

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
