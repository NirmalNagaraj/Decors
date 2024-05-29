const { Image } = require("../models/Image");

module.exports.test = (req, res) => {
    res.json({
        message: "Backend is working"
    });
};

module.exports.uploadImage = async (req, res) => {
    try {
        const { imageURL, imageType, ...otherFormData } = req.body;

        // Store URL and image type in MongoDB
        const image = new Image({ profilePicture: imageURL, imageType, ...otherFormData });
        await image.save();

        res.status(201).json({ message: "Image URL stored successfully", imageURL });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports.getAllImages = async (req, res) => {
    try {
        const filter = req.query.filter || {};
        const images = await Image.find(filter, 'profilePicture imageType');
        res.status(200).json(images);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports.deleteImage = async (req, res) => {
    const { imageId } = req.body;
    try {
        await Image.findByIdAndDelete(imageId);
        res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
