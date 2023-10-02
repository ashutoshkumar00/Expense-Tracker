import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from "react";

const INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date() 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(),
  },
];

const App= () => {
  
  const [expenses,setExpenses] = useState(INITIAL_EXPENSE)

  const handleNewExpensedata = (newExpenseData) => {
    setExpenses((prevExpenses)=>[...prevExpenses,newExpenseData]);
  }

  const compare= (exp1,exp2) => {
      if(exp1.date.getMonth()===exp2.date.getMonth()) return exp1.date.getDate()-exp2.date.getDate();
      return exp1.date.getMonth()-exp2.date.getMonth();
  }

  expenses.sort(compare);

  return (
    <div className="App">
      <NewExpense onGettingNewExpensedata={handleNewExpensedata}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
