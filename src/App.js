import React from 'react';
import './App.css';
import { NewExpense } from './components/new-expense/NewExpense';
import { Expenses } from './components/expenses/Expenses';
import { useState } from 'react';

function App() {
	const [newExpense, setNewExpense] = useState([
		{
			id: '1',
			title: 'Зарядник',
			price: 120,
			date: new Date('2022, 3, 13'),
		},
	]);

	const addNewExpense = (data) => {
		setNewExpense([...newExpense, data]);
	};
	return (
		<div className='App'>
			<NewExpense addNewExpense={addNewExpense} />
			<Expenses newExpense={newExpense} />
		</div>
	);
}

export default App;
