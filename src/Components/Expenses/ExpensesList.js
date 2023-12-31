import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((currYearExpense) => (
        <ExpenseItem
          key={currYearExpense.id}
          title={currYearExpense.title}
          amount={currYearExpense.amount}
          date={currYearExpense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
