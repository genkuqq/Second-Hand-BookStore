import { Book } from "./book.model"

export async function getBooks() {
    try {
        const books = await Book.findAll()
        return books
    } catch (error) {
        console.log(error)
    }
}

export async function addBook() {
    try {
        const book = await Book.create({
            title: "test",
            author: "test",
            isbn: "isbn",
            publisher: "publisher",
            genre: "genre",
            price: 1,
            quantity: 1,
            coverImage: "coverImage",
        })
    } catch (error) {
        console.log(error)
    }
}
