import { Router } from "express";
import { getBooks } from "../controllers/book.controllers";

const router = Router();

router.get("/", getBooks);

export default router;
