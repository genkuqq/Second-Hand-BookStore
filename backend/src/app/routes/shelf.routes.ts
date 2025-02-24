import { Router } from "express";
import {
    addBooktoShelf,
    addShelf,
    getShelves,
} from "../controllers/shelf.controllers";

const router = Router();

router.get("/", getShelves);
router.post("/", addShelf);
router.put("/:id/:idd", addBooktoShelf);

export default router;
