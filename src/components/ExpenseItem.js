
import './ExpenseItem.css'
import React from 'react';

function ExpenseItem(props) {
    const addToCart = props.addToCart
    const itemJson = { "title": props.title, "amount": props.amount, "img": props.img }

    return (
        <div className='expense-item'>
            <div className='Add-to-cart'><button className='Button' onClick={() => addToCart(itemJson)}> <label> Purchase</label></button></div>
            <div>
                <div className="expense-item__description "> {props.title} </div>
                <div className="expense-item__price"> {props.amount} </div>
            </div>
            <div className="expense-item_image"><img src={props.img} height={100} width={100} alt=""></img></div>
        </div>
    );
}

export default ExpenseItem;