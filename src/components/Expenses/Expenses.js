import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

function Expenses(props) {
	return (
		<div>
			<Card className="expenses">
				<ExpensesList expenses={props.expenses} />
			</Card>
		</div>
	);
}

export default Expenses;
