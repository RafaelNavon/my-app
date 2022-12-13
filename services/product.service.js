const Product = require("../models/product.model");
const TwitterSDK = require("./twitter.service.js");
const { default: mongoose } = require("mongoose");


async function getAllProducts() 
{
    return await Product.find({ active: true }).sort({ price: 1 }).lean().exec();
}

async function createProduct(name, description, price, quantityInStock, pictures) {
    const findProduct = await Product.findOne({ "name": name });
    if (findProduct != null) 
    {
        return null;
    }

    const product = await Product.create({
        _id: mongoose.Types.ObjectId(),
        name: name,
        description: description,
        numberOfOrders: 0,
        price: price,
        quantityInStock: quantityInStock,
        pictures: pictures,
        created: new Date()
    });

    const response = await product.save();
    await TwitterSDK.tweet(product);
    return response;
}


module.exports = {
    getAllProducts,
    createProduct
}