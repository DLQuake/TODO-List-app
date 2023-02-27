import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {
	const [imie, setImie] = useState("");
	const [nazwisko, setNazwisko] = useState("");
	const [email, setEmail] = useState("");
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [role, setRole] = useState("");
	const [msg, setMsg] = useState("");
	const navigate = useNavigate();

	const saveUser = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/users", {
				imie: imie,
				nazwisko: nazwisko,
				email: email,
				login: login,
				password: password,
				confPassword: confPassword,
				role: role,
			});
			navigate("/users");
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};
	return (
		<div>
			<h1 className="title">Użytkownicy</h1>
			<h2 className="subtitle">Dodaj nowego użytkownika</h2>
			<div className="card is-shadowless">
				<div className="card-content">
					<div className="content">
						<form onSubmit={saveUser}>
							<p className="has-text-centered">{msg}</p>
							<div className="field">
								<label className="label">Imię</label>
								<div className="control">
									<input type="text" className="input" value={imie} onChange={(e) => setImie(e.target.value)} placeholder="Imię" />
								</div>
							</div>
							<div className="field">
								<label className="label">Nazwisko</label>
								<div className="control">
									<input type="text" className="input" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)} placeholder="Nazwisko" />
								</div>
							</div>
							<div className="field">
								<label className="label">Email</label>
								<div className="control">
									<input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
								</div>
							</div>
							<div className="field">
								<label className="label">Login</label>
								<div className="control">
									<input type="text" className="input" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
								</div>
							</div>
							<div className="field">
								<label className="label">Hasło</label>
								<div className="control">
									<input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
								</div>
							</div>
							<div className="field">
								<label className="label">Potwierdź hasło</label>
								<div className="control">
									<input type="password" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="******" />
								</div>
							</div>
							<div className="field">
								<label className="label">Rola</label>
								<div className="control">
									<div className="select is-fullwidth">
										<select value={role} onChange={(e) => setRole(e.target.value)}>
											<option>Wybierz Role</option>
											<option value="redaktor">Redaktor</option>
											<option value="recenzent">Recenzent</option>
											<option value="admin">Autor</option>
										</select>
									</div>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<button type="submit" className="button is-link">Zapisz</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormAddUser;
