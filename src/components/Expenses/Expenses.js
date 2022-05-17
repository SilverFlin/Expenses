import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [yearValue, setYearValue] = useState("2022");

  const filterExpenseHandler = (year) => {
    setYearValue(year);
    // console.log(props.expenses[0].date.getFullYear());
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearValue}
          onFilterExpense={filterExpenseHandler}
        />

        {/* {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id} //https://reactjs.org/docs/lists-and-keys.html#keys
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}

        {/* TODO Filter logic */}
        {props.expenses.filter((expense) => {
          return expense.date.getFullYear().toString() === yearValue;
        })}
      </Card>
    </div>
  );
}

export default Expenses;
