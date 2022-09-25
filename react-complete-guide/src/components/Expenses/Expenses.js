import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear]=useState('2020')
  
  
  const filterChangeHander=function(selectedYear){
    setFilteredYear(selectedYear)
  }


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHander}/>
      {props.items.map(e=>{
        return <ExpenseItem title={e.title} amount={e.amount} date={e.date}/>
      })}
      
    </Card>
  );
}

export default Expenses;
