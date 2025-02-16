import express, { Express, Request, Response } from "express";

import {database} from "./app/db/db";

import { Book } from "./app/book/book.model";

Book.sync()

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  database.sync();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});