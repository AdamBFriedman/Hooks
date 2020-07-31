import React, { useState } from 'react';

function Todo({ todo, index }) {
	return <div>{todo.text}</div>;
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
		<div>
			<div>
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} />
				))}
			</div>
		</div>
	);
}

export default App;
