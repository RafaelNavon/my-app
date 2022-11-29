
// import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'


function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            {/* <ExpenseDate date={props.date} /> */}
            <div className="expense-item__description "> {props.title} </div>
            <div className="expense-item__price"> {props.amount} </div>
            {/* <div className="TheHobbit"> {props.img} <img src="/Images/TheHobbitBook.jpg" alt="" height={100} width={100}></img> </div> */}

        </div>
    );
}

export default ExpenseItem;