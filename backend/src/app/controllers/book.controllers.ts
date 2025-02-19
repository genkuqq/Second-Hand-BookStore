import { Request, Response } from "express";

export const getBooks = (req: Request, res: Response) => {
    res.json({ message: "test" });
};
