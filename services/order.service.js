const Order = require("../models/order.model");
const Product = require("../models/product.model");
const shoppingCartService = require("../services/shoppingCart.service")
const AddressModel = require('../models/address.model');
const { findOneAndUpdate } = require("../models/address.model");
const ObjectId = require('mongoose').Types.ObjectId;


async function createOrder(orderObject)
 {
    let cart = await shoppingCartService.getActiveShoppingCart();
    const order = await Order.create({
        products: [],
        time: new Date(),
        price: cart.totalPrice,
        status: 'Created',
    })

    for (let product of cart.products) 
    {
        order.products.push({ product: product.product, count: product.count })
        const productDbObject = await Product.findOne({ _id: ObjectId(product.product._id) });
    }

    await shoppingCartService.deleteShoppingCart(cart._id);

    return await order.save();

}

module.exports = 
{
    createOrder
}
