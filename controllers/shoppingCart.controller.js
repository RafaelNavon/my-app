const shoppingCartService = require("../services/shoppingCart.service")

async function getActiveShoppingCart(req, res) 
{
    try 
    {
        res.json({ sucess: true, data: await shoppingCartService.getActiveShoppingCart() });

    } catch (exeption) 
    {
        console.error(exeption.stack)
        res.status(400).json({ success: false, error: exeption });
    }
}

async function addProductToShoppingCart(req, res)
 {
    try 
    {
        const response = await shoppingCartService.addProductToShoppingCart(req.body.productId,req.body.count);
        req.session.shoppingCart = response;
        res.json({ success: true, data: response });
    } catch (exeption) 
    {
        console.error(exeption.stack);
        res.status(400).send(exeption);
    }

}

async function removeProductFromShoppingCart(req, res) 
{
    try 
    {

    } catch (exeption)
     {
        console.error(exeption.stack);
        res.status(400).json({ success: false, error: exeption });
    }
    const response = await shoppingCartService.removeProductFromShoppingCart(req.body.productId,req.body.count);
    req.session.shoppingCart = response;
    res.json({ success: true, data: response });
}

async function deleteShoppingCart(req, res) 
{
    const response = await shoppingCartService.deleteShoppingCart(req.body.Id);
    delete req.session.shoppingCart;
    res.json({ success: true, message: "Deleted has been successfully" });
}

async function createShoppingCart(req, res) {
    if (req.session.loggedIn) {
        const productId = req.body;
        res.render("../views/shoppingCart", { shoppingCart: await shoppingCartService.createShoppingCart( productId) });
    }
    else {
        return res.redirect("/signin");
    }
}

async function getProducts(req, res) {
    res.render("shoppingCart", { shoppingCart: await shoppingCartService.getProducts() });
}

module.exports = {
    getActiveShoppingCart,
    addProductToShoppingCart,
    deleteShoppingCart,
    createShoppingCart,
    removeProductFromShoppingCart,
    getProducts
}
