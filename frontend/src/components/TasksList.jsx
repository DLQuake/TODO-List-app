import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';

const TaskList = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTasks();
	}, []);

	const getTasks = async () => {
		const response = await axios.get("http://localhost:5000/tasks");
		setTasks(response.data);
	};

	const deleteTasks = async (tasksId) => {
		await axios.delete(`http://localhost:5000/tasks/${tasksId}`);
		getTasks();
	};

	return (
		<div>
			<h1 className="title">Lista Zadań</h1>
			<Link to="/tasks/add" className="button is-info mb-2">Dodaj nowe Zadanie</Link>
			<table className="table is-striped is-fullwidth">
				<thead>
					<tr>
						<th>ID</th>
						<th>Status</th>
						<th>Nazwa zadania</th>
						<th>Opis</th>
						<th>Priorytet</th>
						<th>Do kiedy wykonać</th>
						<th>Stworzone przez</th>
						<th>Opcje</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((tasks, index) => (
						<tr key={tasks.uuid}>
							<td>{index + 1}</td>
							<td>{tasks.status}</td>
							<td>{tasks.name}</td>
							<td>{tasks.description}</td>
							<td>{tasks.priority}</td>
							<td>{moment(tasks.dueDate).format("DD.MM.YYYY HH:mm:ss")}</td>
							<td>{tasks.user.email}</td>
							<td>
								<div className="Option">
									<Link to={`/tasks/edit/${tasks.uuid}`} className="button is-small is-info">Edytuj</Link>
									<button onClick={() => deleteTasks(tasks.uuid)} className="button is-small is-danger">Usuń</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TaskList;
