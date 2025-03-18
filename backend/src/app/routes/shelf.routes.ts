import { Router } from "express";
import {
	addBooktoShelf,
	addShelf,
	findPlacement,
	getShelf,
	getShelves,
	removeBookFromShelf,
	removeShelf,
	updateShelf,
} from "../controllers/shelf.controllers";

const router = Router();

router.get("/", getShelves);
router.get("/getshelf", getShelf);
router.post("/addshelf", addShelf);
router.put("/addbook", addBooktoShelf);
router.put("/removebook", removeBookFromShelf);
router.put("/updateshelf", updateShelf);
router.delete("/removeshelf", removeShelf);
router.get("/placement", findPlacement);

export default router;
