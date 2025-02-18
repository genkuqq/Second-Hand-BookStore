import { Book, IBook } from "./book.model";

export async function getBooks() {
    try {
        const books = await Book.findAll({
            order: [["id", "ASC"]],
            limit: 10,
        });
        return books;
    } catch (error) {
        console.log(error);
    }
}

export async function getBook(id: Number) {
    try {
        const book = await Book.findOne({ where: { id } });
        return book;
    } catch (error) {
        console.log(error);
        return;
    }
}

export async function createBook(book: IBook) {
    try {
        const createdBook = await Book.create(book);
    } catch (error) {
        console.log(error);
    }
}
