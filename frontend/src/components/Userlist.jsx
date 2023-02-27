import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const response = await axios.get("http://localhost:5000/users");
		setUsers(response.data);
	};

	const deleteUser = async (uzytkownikId) => {
		await axios.delete(`http://localhost:5000/users/${uzytkownikId}`);
		getUsers();
	};

	return (
		<div>
			<h1 className="title">Użytkownicy</h1>
			<h2 className="subtitle">Lista użytkowników</h2>
			{/* <Link to="/users/add" className="button is-primary mb-2">Dodaj nowego użytkownika</Link> */}
			<table className="table is-striped is-fullwidth">
				<thead>
					<tr>
						<th>ID</th>
						<th>Imię</th>
						<th>Nazwisko</th>
						<th>Email</th>
						<th>Rola</th>
						<th>Opcje</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={user.uuid}>
							<td>{index + 1}</td>
							<td>{user.imie}</td>
							<td>{user.nazwisko}</td>
							<td>{user.email}</td>
							<td>{user.role}</td>
							<td>
								<Link to={`/users/edit/${user.uuid}`} className="button is-small is-info">Edytuj</Link>
								<button onClick={() => deleteUser(user.uuid)} className="button is-small is-danger">Usuń</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Userlist;
