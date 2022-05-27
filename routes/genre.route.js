const { Router } = require("express");
const { genreController } = require("../controllers/genre.controller");

const router = Router();

router.post("/genre", genreController.postGenre);
router.delete("/genre/:id", genreController.deleteGenre);
router.get("/genre", genreController.getGenre);

module.exports = router;
