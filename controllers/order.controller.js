const orderService = require("../services/order.service")

async function createOrder(req, res) 
{
    try 
    {
        const response = await orderService.createOrder(req.body);
        if (response == null) 
        {
            return res.status(401).json({ error: "Failed to create the order" });
        }
        else 
        {
            res.json({ success: true, message: "The order created successfully" });
        }
    }
    catch (exeption) 
    {
        console.error(exeption.stack)
        res.status(400);
        res.json({ success: false, error: exeption.message });
    }
}


module.exports = 
{
    createOrder
}