import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { findBestPlacement } from "../utils/book";
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

export async function getShelf(req: Request, res: Response): Promise<any> {
	const shelfID = req.query.shelfID;
	if (!shelfID) {
		return res.status(404).json({ error: "get shelf error" });
	}
	try {
		const shelf = await prisma.shelf.findUnique({
			where: { id: Number(shelfID) },
			include: { books: true },
		});
		if (!shelf) {
			return res.status(404).json({ message: "test" });
		}
		return res.status(200).json(shelf);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "something wrong" });
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
	const { bookID, shelfID } = req.query;
	try {
		const book = await prisma.book.findUnique({
			where: { id: Number(bookID) },
		});
		const shelf = await prisma.shelf.findUnique({
			where: { id: Number(shelfID) },
		});
		if (!book) {
			return res.status(404).json({ error: "book missing" });
		}
		if (!shelf) {
			return res.status(404).json({ error: "shelf missing" });
		}
		if (book.bookWidth > shelf.emptySpace) {
			return res.status(404).json({ error: "book cant fit in this shelf" });
		}
		const transfer = await prisma.$transaction([
			prisma.book.update({
				where: {
					id: Number(bookID),
				},
				data: {
					shelf: {
						connect: { id: Number(shelfID) },
					},
				},
			}),
			prisma.shelf.update({
				where: {
					id: Number(shelfID),
				},
				data: {
					books: {
						connect: { id: Number(bookID) },
					},
					emptySpace: {
						decrement: book.bookWidth,
					},
				},
			}),
		]);
		return res.status(200).json({ transfer });
	} catch (error) {
		console.log(error);
		return res.sendStatus(500).json({ message: "something wrong" });
	}
}

export async function removeBookFromShelf(
	req: Request,
	res: Response
): Promise<any> {
	const { bookID, shelfID } = req.query;
	try {
		const uniqueBook = await prisma.book.findUnique({
			where: {
				id: Number(bookID),
			},
		});
		if (!uniqueBook) {
			return res.status(404).json({ error: "book not found" });
		}
		const book = await prisma.shelf.findMany({
			select: {
				_count: {
					select: {
						books: {
							where: {
								id: Number(bookID),
							},
						},
					},
				},
			},
		});
		if (!book) {
			return res.status(404).json({ error: "cant find book in shelf" });
		}
		await prisma.$transaction([
			prisma.book.update({
				where: {
					id: Number(bookID),
				},
				data: {
					shelf: {
						disconnect: { id: Number(shelfID) },
					},
				},
			}),
			prisma.shelf.update({
				where: {
					id: Number(shelfID),
				},
				data: {
					books: {
						disconnect: { id: Number(bookID) },
					},
					emptySpace: {
						increment: uniqueBook.bookWidth,
					},
				},
			}),
		]);
		return res.status(200).json({ message: "book removed" });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "something wrong" });
	}
}

export async function updateShelf(req: Request, res: Response): Promise<any> {
	const shelfBody = req.body;
	const shelfID = req.query.shelfID;
	try {
		const oldShelf = await prisma.shelf.findFirst({
			where: { id: Number(shelfID) },
		});
		if (!oldShelf) {
			return res.status(404).json({ error: "shelf missing" });
		}
		if (!shelfBody) {
			return res.status(400).json({ error: "body empty" });
		}
		const newShelf = await prisma.shelf.update({
			where: {
				id: Number(shelfID),
			},
			data: {
				...shelfBody,
			},
		});
		return res.status(200).json({ newShelf });
	} catch (error) {
		console.log(error);
		return res.sendStatus(500).json({ message: "something wrong" });
	}
}

export async function removeShelf(req: Request, res: Response): Promise<any> {
	const shelfID = req.query.shelfID;
	try {
		const oldShelf = await prisma.shelf.findFirst({
			where: { id: Number(shelfID) },
		});
		if (!oldShelf) {
			return res.status(400).json({ error: "shelf not found" });
		}
		await prisma.shelf.delete({ where: { id: Number(shelfID) } });
		return res.status(200).json({ message: "shelf gone" });
	} catch (error) {
		console.log(error);
		return res.sendStatus(500).json({ message: "something wrong" });
	}
}
export async function findPlacement(req: Request, res: Response): Promise<any> {
	const bookID = req.query.bookID;
	if (!bookID) {
		return res.status(400).json({ error: "enter a idd" });
	}
	try {
		const shelves = await findBestPlacement(Number(bookID));
		if (!shelves) {
			return res.status(400).json({ error: "shelves are full" });
		}
		return res.status(200).json(shelves);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500).json({ message: "something wrong" });
	}
}
