import express from "express";
import bodyParser from "body-parser";
import { router } from "./app/routes";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api", router);
app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
