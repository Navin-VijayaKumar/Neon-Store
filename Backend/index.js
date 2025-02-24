const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://navinv:9788665770@cluster0.y2evh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/", (req, res) => {
    res.send("Express app is running");
    console.log("Express app is running");
});

// Storage setup for image uploads
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });
app.use("/images", express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Product Schema
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    longImage: String,
    category: String,
    gameDes: String,
    new_price: Number,
    old_price: Number,
    gameTitleImg: String,
    offer_percentage: Number,
    age_limit: Number,
    osMin: String,
    osRec: String,
    proMin: String,
    proRec: String,
    memoryMin: String,
    memoryRec: String,
    storageMin: String,
    storageRec: String,
    graphicMin: String,
    graphicRec: String,
    otherMin: String,
    otherRec: String,
    languages: String,
    rating: String,
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true }
});

const Product = mongoose.model("Product", productSchema);
app.post('/addproduct', async (req, res) => {
    console.log("Received product data:", req.body);

    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    
    try {
        const product = new Product({
            id,
            ...req.body 
        });

        await product.save();
        console.log("Product saved:", product);
        res.json({ success: true, product });
    } catch (err) {
        console.error("Error saving product:", err);
        res.status(500).json({ success: false, message: "Failed to save product", error: err });
    }
});

// Remove Product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Product removed");
    res.json({ success: true, name: req.body.name });
});

// Get All Products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All products retrieved from database");
    res.send(products);
});

app.listen(port, (e) => {
    if (!e) {
        console.log("Server is running on port:" + port);
    } else {
        console.log("Error on MongoDB connection: " + e);
    }
});
