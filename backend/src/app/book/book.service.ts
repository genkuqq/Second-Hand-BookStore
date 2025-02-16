import { Book } from "./book.model";

export async function getBooks() {
    try{
        const books = await Book.findAll();
        return books;
    } catch (error) {
        console.log(error);
    }; 
}