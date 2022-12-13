const productService = require("../services/product.service")

async function getAllProducts(req, res) 
{
    try 
    {
        const products = await productService.getAllProducts();
        res.json({ success: true, data: products });

    }
    catch (exeption) 
    {
        res.status(400);
        res.json({ success: false, error: exeption.message });
    }
}


async function createProduct(req, res) 
{
    try 
    {
        
        const { name, description, price, quantityInStock, pictures } = req.body
        const response = await productService.createProduct(name, description, price, quantityInStock, pictures);
        if (response == null) 
        {
            res.json({ success: true, message: "Failed to create the order" });
        }
        else 
        {
            res.json({success:true,data:response});
        }

    }
    catch (exeption) {
        res.status(400);
        res.json({ success: false, error: exeption.message });
    }
}


module.exports = {
    getAllProducts,
    createProduct

}