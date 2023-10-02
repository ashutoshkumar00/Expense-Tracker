import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart'
import { useState } from "react";

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState("2023");

  const handleSelectedYear = (yearSelected) => {
    setSelectedYear(yearSelected);
  };

  const filteredArray = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onSelectingYear={handleSelectedYear}
      />
      <ExpensesChart expenses={filteredArray}/>
      {filteredArray.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
    </Card>
  );
};

export default Expenses;
