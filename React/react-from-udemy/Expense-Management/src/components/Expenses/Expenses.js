import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");

  const expensesFilterHandler = (expenseYear) => {
    setSelectedYear(expenseYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );


  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={selectedYear}
        onExpenseFiltered={expensesFilterHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
