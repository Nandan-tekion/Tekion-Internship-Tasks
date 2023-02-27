import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInputed, setUserInputed] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });


    const titleChangeHandler = (event) => {
        // setUserInputed((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle : event.target.value
        //     }
        // });
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        // setUserInputed((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount : event.target.value
        //     }
        // });
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInputed((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate : event.target.value
        //     }
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData);
        props.onCancelExpenseData();
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate} min='2019-01-01' max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit">New Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;
