
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
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