import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const year = props.date.toLocaleString("ko-KR", { year: "numeric" });
  const day = props.date.toLocaleString("ko-KR", { day: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__monteh">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
