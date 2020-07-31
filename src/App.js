import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) {
	return <div className="todo">{todo.text}</div>;
}

function TodoForm() {
	return (
		<div className="todoForm">
			<input type="text" placeholder="Add todo..." />
		</div>
	);
}

function App() {
	const [todos, setTodos] = useState([
		{
			text: 'Learn React',
			isCompleted: false,
		},
		{
			text: 'Learn Classes',
			isCompleted: false,
		},
		{
			text: 'Learn Hooks',
			isCompleted: false,
		},
	]);

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} />
				))}
				<TodoForm />
			</div>
		</div>
	);
}

export default App;
