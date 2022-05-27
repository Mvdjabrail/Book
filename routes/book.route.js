const { Router } = require("express");
const { bookController } = require("../controllers/book.controller");

const router = Router();

router.post("/book", bookController.postBook);
router.delete("/book/:id", bookController.deleteBook);
router.patch("/book/:id", bookController.patchBook);
router.get("/book/:id", bookController.getBookById);
router.get("/book", bookController.getBook);
router.get("/book/genre/:id", bookController.getBookByIdGenre);

module.exports = router;
