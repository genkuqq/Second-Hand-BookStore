import Router from "express";
import { addBook, getBooks } from "./book.service";
import { Book } from "./book.model";

const router = Router();

router.get("/books", async function (req, res) {
    try {
        const books = await getBooks();
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong while fetching books.",
        });
    }
});

router.get("/book/:id", async function (req, res) {
    try {
        const bookID = req.params.id;
        const book = await Book.findByPk(bookID);
        res.send(`Book with ID ${book}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong while fetching the book.",
        });
    }
});

router.get("/b", async function (req, res) {
    try {
        const books = await addBook();
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong while fetching books.",
        });
    }
});

export default router;
