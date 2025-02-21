import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getBooks(req: Request, res: Response) {
    try {
        const books = await prisma.book.findMany();
        if (!books || books.length == 0) {
            res.status(400).json({ error: "not found" });
        } else {
            res.status(200).json({ books });
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getBook(req: Request, res: Response) {
    const bookID = req.params.id;
    const book = await prisma.book.findUnique({
        where: { id: Number(bookID) },
    });
    try {
        if (!book) {
            res.status(404).json({ error: "not found" });
        } else {
            res.status(200).json({ book });
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function addBook(req: Request, res: Response) {
    const bookBody = req.body;
    if (!bookBody) {
        res.status(400).json({ error: "not body" });
    } else {
        try {
            const user = await prisma.book.create({
                data: {
                    ...bookBody,
                },
            });
            if (!user) {
                res.status(400).json({ error: "error creation" });
            } else {
                res.status(200).json({ user });
            }
        } catch (error) {
            console.log(error);
        }
    }
}
