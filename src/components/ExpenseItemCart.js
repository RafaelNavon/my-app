import './ExpenseItem.css'



function ExpenseItemCart(props) {
    const removeFromCart = props.removeFromCart
    const itemJson = { "title": props.title, "amount": props.amount, "img": props.img }
    return (
        <div className='expense-item'>
            <div><img src={props.img} alt="" width="100" height="100" /></div>
            <div>
                <button onClick={() => removeFromCart(itemJson)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg></button>
                <div className="expense-item__title"> {props.title}</div>
                <div className="expense-item__price"> {props.amount}</div>
            </div>
        </div>

    );
}

export default ExpenseItemCart;