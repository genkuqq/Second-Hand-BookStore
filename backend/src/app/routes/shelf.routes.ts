import { Router } from "express";
import {
    addBooktoShelf,
    addShelf,
    getShelf,
    getShelves,
    removeShelf,
    updateShelf,
} from "../controllers/shelf.controllers";

const router = Router();

router.get("/", getShelves);
router.get("/:id", getShelf);
router.post("/", addShelf);
router.put("/addbook", addBooktoShelf);
router.put("/:id", updateShelf);
router.delete("/:id", removeShelf);

export default router;
