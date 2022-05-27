import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
	const [ title, setTitle ] = useState(props.title);

	const changeNameHandler = () => {
		const newName = prompt('Set new Title:', title);
		setTitle(newName);
	};

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2 onClick={changeNameHandler}>{title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
			</Card>
		</li>
	);
}

export default ExpenseItem;
