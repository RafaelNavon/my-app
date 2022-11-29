
import ExpenseItem from "./components/ExpenseItem";


function App() {

  const expense = [
    { title: 'The Hobbit', date: new Date(2020, 2, 28), amount: 84.60 },
    { title: 'Dune', amount: 2000, date: new Date(2021, 3, 28) },
    { title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
    { title: 'honda', amount: 500, date: new Date(2023, 5, 28) },

  ];
  return (
    <div>
      <h2>Books Store</h2>
      <ExpenseItem
        title={expense[0].title}
        date={expense[0].date}
        amount={expense[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        date={expense[1].date}
        amount={expense[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        date={expense[2].date}
        amount={expense[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        date={expense[3].date}
        amount={expense[3].amount}
      ></ExpenseItem>
    </div>
  )

}

export default App;
