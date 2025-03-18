import { Router } from "express";
import {
	addBook,
	getBook,
	getBooks,
	removeBook,
	updateBook,
} from "../controllers/book.controllers";

const router = Router();

router.get("/", getBooks);
router.get("/getbook", getBook);
router.get("/nonplaced");
router.post("/addbook", addBook);
router.put("/updatebook", updateBook);
router.delete("/removebook", removeBook);

export default router;
