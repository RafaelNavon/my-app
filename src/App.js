
import ExpenseItem from "./components/ExpenseItem";
import './App.css'

import img1 from "./Images/TheHobbitBook.jpg";
import img2 from "./Images/DuneBook.jpg";
import img3 from "./Images/LordOfTheRings.jpg";
import img4 from "./Images/TheSorcerer.jpg";
import img5 from "./Images/City.jpg";


function App() {

  const expense = [
    { title: 'The Hobbit', amount: "ILS 84.60", img: img1 },
    { title: 'Dune', amount: "ILS 88.20", img: img2 },
    { title: 'Lord Of The Rings', amount: "ILS 169.20", img: img3 },
    { title: 'The Sorcerer', amount: "ILS 88.20", img: img4 },
    { title: 'City of Bones', amount: "ILS 84.60", img: img5 },

  ];

  let listItems = expense.map((item, prop) => {
    return <li className="listitem" key={prop}>
      <ExpenseItem
        title={expense[prop].title}
        amount={expense[prop].amount}
        img={expense[prop].img}
      ></ExpenseItem></li>
  })


  return (
    <div className="Store">
      <div className="BooksStore">
        <h2>BookStore</h2>
      </div>
      <ul className="list_Items">
        {listItems}
      </ul>
    </div >
  );

}

export default App;
