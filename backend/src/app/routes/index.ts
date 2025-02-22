import { Router } from "express";
import bookRoutes from "./book.routes";

const router = Router();
router.get("/", (req, res) => {
    res.json({ message: "Welcome to the API!" });
});

router.use("/books", bookRoutes);

export { router };
