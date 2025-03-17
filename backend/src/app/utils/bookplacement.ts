// I dont want to make optimizations about books in first hand
// I dont know what can i do about placements.
// Shelves has width and also our books has so in simple fact
// so we can get placement recomandations with this empty spots i guess
//
// Bookshelf width : 31-32 inch / 80 cm
//

interface Shelf {
	id: Number;
}
export async function findBestPlacement(bookID: Number): Promise<Shelf> {
	const ne = {
		id: bookID,
	};
	return ne;
}
