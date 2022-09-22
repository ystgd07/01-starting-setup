import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React,{useState} from 'react'
function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title)

  const amount=props.amount*1200

  function clickHandler(){
    setTitle('Updated!!')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount.toLocaleString('ko-KR')} 원</div>
        <button onClick={clickHandler}>click</button>

      </div>
    </Card>
  );
}

export default ExpenseItem;
