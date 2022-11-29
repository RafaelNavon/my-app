
import ExpenseItem from "./components/ExpenseItem";
import img1 from "./Images/DuneBook.jpg";


function App() {

  const expense = [
    { title: 'The Hobbit', amount: "ILS 84.60", image: img1 },
    { title: 'Dune', amount: "ILS 88.20", },
    { title: 'Lord Of The Rings', amount: "ILS 169.20" },
    { title: 'The Sorcerer', amount: "ILS 88.20" },
    { title: 'City of Bones', amount: "ILS 84.60" },

  ];
  return (
    <div>
      <h2 className="Title">Books Store</h2>
      <img src="/Images/TheHobbitBook.jpg" alt="" height={100} width={100}></img>
      <ExpenseItem
        title={expense[0].title}
        image={expense[0].image}
        amount={expense[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        image={expense[1].image}
        amount={expense[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}

        amount={expense[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}

        amount={expense[3].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[4].title}

        amount={expense[4].amount}
      ></ExpenseItem>
    </div>
  )

}

export default App;
