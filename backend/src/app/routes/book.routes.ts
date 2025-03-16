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
router.get("/:id", getBook);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", removeBook);

export default router;
