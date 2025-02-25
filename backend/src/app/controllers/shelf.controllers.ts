import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getShelves(req: Request, res: Response): Promise<any> {
    try {
        const shelves = await prisma.shelf.findMany();
        if (!shelves || shelves.length == 0) {
            return res.status(400).json({ error: "not found" });
        }
        return res.status(200).json({ shelves });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ message: "something wrong" });
    }
}

export async function addShelf(req: Request, res: Response): Promise<any> {
    const shelfBody = req.body;
    try {
        if (!shelfBody) {
            return res.status(400).json({ error: "not body" });
        }
        const shelf = await prisma.shelf.create({
            data: {
                ...shelfBody,
            },
        });
        return res.status(200).json({ shelf });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ message: "something wrong" });
    }
}

export async function addBooktoShelf(
    req: Request,
    res: Response
): Promise<any> {
    const bookID = req.params.id;
    const shelfID = req.params.idd;
    try {
        const oldBook = await prisma.book.findFirst({
            where: { id: Number(bookID) },
        });
        if (!oldBook) {
            return res.status(404).json({ error: "book missing" });
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
        return res.status(200).json({ newBook });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ message: "something wrong" });
    }
}
