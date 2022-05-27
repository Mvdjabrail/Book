const { Router } = require("express");
const { reviewController } = require("../controllers/review.controller");

const router = Router();

router.post("/review", reviewController.postReviewByBook);
router.delete("/review/:id", reviewController.deleteReview);
router.get("/review/:id",reviewController.getReview);

module.exports = router;
