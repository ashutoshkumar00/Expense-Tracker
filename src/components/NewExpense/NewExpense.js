import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expensedata = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setAddExpense(false);
    props.onGettingNewExpensedata(expensedata);
  };

  const handleAddExpense = () => {
    setAddExpense(true);
  };

  const handleCancel = () => {
    setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!addExpense && <button onClick={handleAddExpense}>Add Expenses</button>}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
