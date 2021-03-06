import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo }) {
	return (
		<div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
			</div>
		</div>
	);
}

function TodoForm({ addTodo }) {
	const [value, setValue] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={(e) => setValue(e.target.value)} type="text" value={value} placeholder="Add todo..." />
		</form>
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

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
