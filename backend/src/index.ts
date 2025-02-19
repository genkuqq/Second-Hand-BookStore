import express from "express";
import bodyParser from "body-parser";
import { router } from "./app/routes";
import { database } from "./app/db/db";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api", router);
app.listen(port, () => {
    database.sync();
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
