import { Router } from "express";
// import booksController from "./book/book.controller";

const api = Router()
  .use(booksController);
export default Router().use('/api', api);