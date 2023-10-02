import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const handleTitleChange = (event) => {
    console.log(enteredTitle);
    setEnteredTitle(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expensedata = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expensedata);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
