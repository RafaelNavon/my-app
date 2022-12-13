
import './ExpenseItem.css'
import React from 'react';

function ExpenseItem(props) {
    const addToCart = props.addToCart
    const itemJson = { "title": props.title, "amount": props.amount, "url": props.url }
    
    return (
        <div className='expense-item'>
            <div><button onClick={() => addToCart(itemJson)}><img src={props.url} alt="" width="100" height="100" /></button></div>
            <div>
                <div className="expense-item__description "> {props.title} </div>
                <div className="expense-item__price"> {props.amount} </div>
            </div>
            <div className="expense-item_image"><img src={props.img} height={100} width={100} alt=""></img></div>
            {/* <img src="/Images/TheHobbitBook.jpg" alt="" height={100} width={100}></img> */}

        </div>
    );
}

export default ExpenseItem;