import { Request, Response, Router } from "express";
import { addBook, getBooks } from "./book.service";

const router = Router();

router.get('/books', async (req: Request, res: Response) => {
    try {
        const books = await getBooks();
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong while fetching books." });
    }

});


router.get('/b', async (req: Request, res: Response) => {
    try {
        const books = await addBook();
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong while fetching books." });
    }

});

export default router;