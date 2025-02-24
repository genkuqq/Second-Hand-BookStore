import { Router } from "express";
import bookRoutes from "./book.routes";
import shelfRoutes from "./shelf.routes";

const router = Router();
router.get("/", (req, res) => {
    res.json({ message: "Welcome to the API!" });
});

router.use("/book", bookRoutes);
router.use("/shelf", shelfRoutes);

export { router };
