import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 9, 8);
  // const expeneseTitle = "Car Insurance";
  // const expenseAmount = 294.67;3

  // const month = props.date.toLocaleString("ko-KR", { month: "long" });
  // const year = props.date.toLocaleString("ko-KR", { year: "numeric" });
  // const day = props.date.toLocaleString("ko-KR", { day: "numeric" });

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount * 1200}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
