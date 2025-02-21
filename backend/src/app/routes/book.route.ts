import { Router } from "express";
import { addBook, getBook, getBooks } from "../controllers/book.controllers";

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", addBook);

export default router;
