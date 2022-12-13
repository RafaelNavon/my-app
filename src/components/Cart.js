
import './ExpenseItem.css'
import ExpenseItemCart from './ExpenseItemCart'
function Cart(props) 
{
    const items = props.items
    const { removeFromCart } = { ...props }
    const total = props.total
    let itemList = items.map((item, index) => {
        return <li className="listitem" key={index}>
            <ExpenseItemCart
                title={item.title}
                amount={item.amount}
                url={item.url}
                removeFromCart={removeFromCart}
            ></ExpenseItemCart>
        </li>
    })

    return (
        <div className="store">
            <div className="BooksStore">
                <h2>Cart</h2>
            </div>
            <ul className="list_items">
                {itemList}
            </ul>
            <div>
                <h2>The current total: {total}</h2>
            </div>
        </div >
    );
}

export default Cart;

