import Router from "express";
import { createBook, getBook, getBooks } from "./book.service";
import { Book } from "./book.model";

const router = Router();

// Shows first 10 book
router.get("/books", async function (req, res) {
    try {
        const books = await getBooks();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong while fetching books.",
        });
    }
});

// Shows spesific book
router.get("/book/:id", async function (req, res) {
    try {
        const bookID = req.params.id;
        const book = await getBook(parseInt(bookID));
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong while fetching the book.",
        });
    }
});

router.get("/book", async function (req, res) {
    try {
        const body = req.body;
        const books = await createBook(body);
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong while fetching books.",
        });
    }
});

export default router;
