const { Router } = require("express");
const { autherController } = require('../controllers/auther.controller')

const router = Router();

router.post('/auther', autherController.postAuther)
router.delete('/auther', autherController.deleteAuther)

module.exports = router;

