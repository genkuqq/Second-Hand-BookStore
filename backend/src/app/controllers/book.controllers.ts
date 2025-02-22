import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getBooks(req: Request, res: Response) {
    try {
        const books = await prisma.book.findMany();
        if (!books || books.length == 0) {
            res.status(400).json({ error: "not found" });
        }
        res.status(200).json({ books });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ message: "something wrong" });
    }
}

export async function getBook(req: Request, res: Response) {
    const bookID = req.params.id;
    try {
        const book = await prisma.book.findUnique({
            where: { id: Number(bookID) },
        });
        if (!book) {
            res.status(404).json({ error: "not found" });
        }
        res.status(200).json({ book });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ message: "something wrong" });
    }
}

export async function addBook(req: Request, res: Response) {
    const bookBody = req.body;
    try {
        if (!bookBody) {
            res.status(400).json({ error: "not body" });
        }
        const book = await prisma.book.create({
            data: {
                ...bookBody,
            },
        });
        res.status(200).json({ book });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ message: "something wrong" });
    }
}

export async function updateBook(req: Request, res: Response) {
    const bookBody = req.body;
    const bookID = req.params.id;
    try {
        const oldBook = await prisma.book.findFirst({
            where: { id: Number(bookID) },
        });
        if (!oldBook) {
            res.status(404).json({ error: "book missing" });
        }
        if (!bookBody) {
            res.status(400).json({ error: "body empty" });
        }
        const newBook = await prisma.book.update({
            where: {
                id: Number(bookID),
            },
            data: {
                ...bookBody,
            },
        });
        res.status(200).json({ newBook });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ message: "something wrong" });
    }
}

export async function removeBook(req: Request, res: Response) {
    const bookID = req.params.id;
    try {
        const oldBook = await prisma.book.findFirst({
            where: { id: Number(bookID) },
        });
        if (!oldBook) {
            res.status(400).json({ error: "book not found" });
        }
        await prisma.book.delete({ where: { id: Number(bookID) } });
        res.status(200).json({ message: "book gone" });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ message: "something wrong" });
    }
}
