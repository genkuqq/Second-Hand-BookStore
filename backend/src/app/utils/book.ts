// I dont want to make optimizations about books in first hand
// I dont know what can i do about placements.
// Shelves has width and also our books has so in simple fact
// so we can get placement recomandations with this empty spots i guess
//
// Bookshelf width : 31-32 inch / 80 cm

import { Request, Response } from "express";
import { PrismaClient, Shelf, Book } from "@prisma/client";
const prisma = new PrismaClient();

export async function findBestPlacement(bookID: Number): Promise<any> {
	const book = await prisma.book.findUnique({
		where: {
			id: Number(bookID),
		},
	});
	if (!book) {
		return false;
	}
	const validShelves = await prisma.shelf.findMany({
		where: {
			emptySpace: {
				gte: book?.bookWidth,
			},
		},
	});
	return { validShelves };
}
