import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

function ExpensesList(props) {
  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
    )
  } else {
    return (
      <h2 className="expenses-list__fallback">
        Found No Expenses
      </h2>
    )
  }
}

export default ExpensesList;
