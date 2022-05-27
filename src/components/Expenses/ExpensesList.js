import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesList.css';

const ExpensesList = (props) => {
	let expenses = props.expenses;
	const [ yearValue, setYearValue ] = useState('All');

	const filterExpenseHandler = (year) => {
		setYearValue(year);
	};

	const expensesRender = (expenses) => {
		return expenses.map((expense) => {
			return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
		});
	};

	const filterExpensesRender = () => {
		if (yearValue === 'All') {
			return expensesRender(expenses);
		} else {
			const filteredExpenses = expenses.filter((expense) => yearValue === expense.date.getFullYear().toString());
			return expensesRender(filteredExpenses);
		}
	};

	let expenseListFound = <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	if (filterExpensesRender().length > 0) expenseListFound = filterExpensesRender();
	return (
		<div>
			<ExpensesFilter selected={yearValue} onFilterExpense={filterExpenseHandler} />
			<ul className="expenses-list">{expenseListFound}</ul>
		</div>
	);
};

export default ExpensesList;
