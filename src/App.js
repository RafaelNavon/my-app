import ExpenseItem from "./components/ExpenseItem";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import { useState } from 'react';
import React from "react";
//import React,{Components} from 'react';

import img1 from "./Images/TheHobbitBook.jpg";
import img2 from "./Images/DuneBook.jpg";
import img3 from "./Images/LordOfTheRings.jpg";
import img4 from "./Images/TheSorcerer.jpg";
import img5 from "./Images/City.jpg";





//change
const expense = [
  { title: 'The Hobbit', amount: 84.60, img: img1 },
  { title: 'Dune', amount: 88.20, img: img2 },
  { title: 'Lord Of The Rings', amount: 169.20, img: img3 },
  { title: 'The Sorcerer', amount: 88.20, img: img4 },
  { title: 'City of Bones', amount: 84.60, img: img5 },

];



function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={
          <ExpenseList addToCart={addToCart} />
        } />
        <Route path="/Cart" element=
          {<Cart items={cart} removeFromCart={removeFromCart} total={total}>
          </Cart>} />
      </Routes>
    </Router>

  );


  function addToCart(item) {
    setTotal(total + item.amount);
    setCart([...cart, item]);
  }


  function removeFromCart(item) {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.title !== item.title);
    setTotal(total - item.amount);
    setCart(hardCopy);
  }


}

export default App;

function ExpenseList(props) {
  const { addToCart, removeFromCart } = { ...props }
  let itemList = expense.map((item, index) => {
    return <li className="listitem" key={index}><ExpenseItem
      title={expense[index].title}
      amount={expense[index].amount}
      img={expense[index].img}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      displaytrash={"None"}
    ></ExpenseItem></li>
  })


  return (
    <div className="Store">
      <div className="BooksStore">
        <h2>BookStore</h2>
      </div>
      <ul className="list_Items">
        {itemList}
      </ul>
    </div >
  );
}

/*
  let listItems = expense.map((item, prop) => {
    return <li className="listitem" key={prop}>
      <ExpenseItem
        title={expense[prop].title}
        amount={expense[prop].amount}
        img={expense[prop].img}
      ></ExpenseItem></li>
  })
  */