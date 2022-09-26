import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = function (props) {
  let expensesContent = <p> No expenses found. </p>;

  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>{expensesContent} </h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
