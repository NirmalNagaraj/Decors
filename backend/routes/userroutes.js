const express = require("express");
const { uploadImage, test, getAllImages, deleteImage } = require("../controllers/userController.js");

const router = express.Router();

router.get('/', test);
router.post('/upload', uploadImage);
router.get('/image', getAllImages);
router.delete('/delete', deleteImage);

module.exports = router;