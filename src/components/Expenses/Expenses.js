import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
	const [ yearValue, setYearValue ] = useState('All');

	const filterExpenseHandler = (year) => {
		setYearValue(year);
		filterExpensesRender();
	};

	const expensesRender = (expenses) => {
		return expenses.map((expense) => {
			return (
				<ExpenseItem
					key={expense.id} //https://reactjs.org/docs/lists-and-keys.html#keys
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			);
		});
	};

	const filterExpensesRender = () => {
		if (yearValue === 'All') {
			return expensesRender(props.expenses);
		} else {
			const filteredExpenses = props.expenses.filter(
				(expense) => yearValue === expense.date.getFullYear().toString()
			);
			return expensesRender(filteredExpenses);
		}
	};
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={yearValue} onFilterExpense={filterExpenseHandler} />
				{filterExpensesRender()}
			</Card>
		</div>
	);
}

export default Expenses;
