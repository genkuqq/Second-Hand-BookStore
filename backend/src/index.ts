import express, { Express, Request, Response } from "express";

import { database } from "./app/db/db";

import { Book } from "./app/book/book.model";
import routes from "./app/routes";

Book.sync();

const app: Express = express();
const port = 3000;

app.use(routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    database.sync();
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
