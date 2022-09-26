import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpenseChart";
import "./Expenses.css";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHander = function (selectedYear) {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHander}
      />
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
