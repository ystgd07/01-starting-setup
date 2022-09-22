import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
function NewExpense(props){
    const saveExpenseDataHandler=function(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
            props.onAddExpense(expenseData)
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
}

export default NewExpense