import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getShelves(req: Request, res: Response) {
    try {
        const shelves = await prisma.shelf.findMany();
        if (!shelves || shelves.length == 0) {
            res.status(400).json({ error: "not found" });
        }
        res.status(200).json({ shelves });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ message: "something wrong" });
    }
}

export async function addShelf(req: Request, res: Response) {
    const shelfBody = req.body;
    try {
        if (!shelfBody) {
            res.status(400).json({ error: "not body" });
        }
        const shelf = await prisma.shelf.create({
            data: {
                ...shelfBody,
            },
        });
        res.status(200).json({ shelf });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ message: "something wrong" });
    }
}

export async function addBooktoShelf(req: Request, res: Response) {
    const bookID = req.params.id;
    const shelfID = req.params.idd;
    try {
        const oldBook = await prisma.book.findFirst({
            where: { id: Number(bookID) },
        });
        if (!oldBook) {
            res.status(404).json({ error: "book missing" });
        }
        const newBook = await prisma.book.update({
            where: {
                id: Number(bookID),
            },
            data: {
                shelf: {
                    connect: { id: Number(shelfID) },
                },
            },
        });
        res.status(200).json({ newBook });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ message: "something wrong" });
    }
}
