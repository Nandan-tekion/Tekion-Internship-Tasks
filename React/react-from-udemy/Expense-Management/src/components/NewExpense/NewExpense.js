import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    setIsEditing(false);
    props.onAddExpense(expenseData);
  };


  const [isEditing, setIsEditing] = useState(false);

  const startEditingExpense = () => {
    setIsEditing(true);
  }

  const stopEditingExpense = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
     {!isEditing && <button onClick={startEditingExpense}>Add New Expense</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingExpense} />}
    </div>
  );
};

export default NewExpense;

// const [renderedContent, setRenderedContent] = useState(<button onClick={addNewExpense}>Add New Expense</button>);

  // const cancelExpenseData = () => {
  //   setRenderedContent(<button onClick={addNewExpense}>Add New Expense</button>);
  // };
  
  // function addNewExpense(){
  //   setRenderedContent(<ExpenseForm onCancelExpenseData={cancelExpenseData} onSaveExpenseData={saveExpenseDataHandler} />)
  // };