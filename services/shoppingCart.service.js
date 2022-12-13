const ShoppingCart = require("../models/shoppingCart.model");
const productService = require("../services/product.service");
const ObjectId = require('mongoose').Types.ObjectId;

async function getActiveShoppingCart() 
{
    let shoppingCart = await ShoppingCart.findOne({ active: true }).populate('products.product').lean().exec();    
    if(!shoppingCart)
     shoppingCart = await createShoppingCart()
    return shoppingCart;
}

async function addProductToShoppingCart(productId, count) 
{
    let shoppingCart = await ShoppingCart.findOne({active:true }).populate('products.product');
    if (!shoppingCart) 
    {
        shoppingCart = await createShoppingCart(productId);
        return shoppingCart
    } 

    else 
    {
        const shoppingCartId = shoppingCart._id;
        let product = await productService.getProduct(productId);
        let productPrice = product.price
        const updatedProduct = shoppingCart.products.filter(product => product.product._id == productId)

        if (updatedProduct[0]) 
        {
            updatedProduct[0].count = count;
        } 
        else 
        {
            shoppingCart.products.push({ product: productId, count });
        }
        let totalPrice = 0;
        for (let product of shoppingCart.products) 
        {
            const prodId = product.product._id || product.product;
            const productPrice = (await productService.getProduct(prodId)).price;
            totalPrice = totalPrice + (product.count * productPrice);
        }
        shoppingCart.totalPrice = totalPrice;

        const savedCart = await shoppingCart.save();
        return await ShoppingCart.findOne({ active: true }).populate('products.product').lean().exec();
    }
}

async function removeProductFromShoppingCart(productId, count) 
{
    const cart = await ShoppingCart.findOne({ active: true });
    const currentProduct = cart.products.filter(product => product.product == productId);

    if (count == 0) 
    {
        cart.products = cart.products.filter(product => product.product != productId);
    } 
    else
    {
        currentProduct[0].count = count;
    }

    let totalPrice = 0;

    for (let product of cart.products) 
    {
        const prodId = product.product._id || product.product;
        const productPrice = (await productService.getProduct(prodId)).price;
        totalPrice = totalPrice + (product.count * productPrice);
    }
    cart.totalPrice = totalPrice;

    await cart.save();
    return await ShoppingCart.findOne({ active: true }).populate('products.product').lean().exec();

}

async function deleteShoppingCart(id) 
{
    const filter = { _id: ObjectId(id) };
    const update = { active: false };
    return await ShoppingCart.findOneAndUpdate(filter, update);
}

async function createShoppingCart(productId)
 {
    const productPrice = await productService.getProduct(productId).price;

    const shoppingCart = await ShoppingCart.create({
        created: new Date(),
        totalPrice: productPrice
    })
    if(productId)
    shoppingCart.products.push({ product: ObjectId(productId),count:1 });

    return await shoppingCart.save();
}


async function getProducts() {
    const shoppingCartProducts = await ShoppingCart.findOne({ active: true }).populate('products.product');
    return shoppingCartProducts.products;
}

module.exports = {
    getActiveShoppingCart,
    addProductToShoppingCart,
    deleteShoppingCart,
    createShoppingCart,
    removeProductFromShoppingCart,
    getProducts
}