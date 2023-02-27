import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormEditTasks = () => {
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPublicationById = async () => {
            const response = await axios.get(`http://localhost:5000/tasks/${id}`);
            setStatus(response.data.status);
            setName(response.data.name);
            setDescription(response.data.description);
            setPriority(response.data.priority);
            setDueDate(response.data.dueDate);
        };
        getPublicationById();
    }, [id]);

    const updateTask = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/tasks/${id}`, {
                name: name,
                description: description,
                status: status,
                priority: priority,
                dueDate: dueDate,
            });
            navigate("/tasks");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div>
            <h1 className="title">Edytuj zadanie</h1>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateTask}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className="label">Nazwa zadania</label>
                                <div className="control has-icons-left">
                                    <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nazwa zadania" />
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-file-lines"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Opis Zadania</label>
                                <div className="control">
                                    <textarea className="textarea" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Treść opisu..."></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Status zadania</label>
                                <div className="control has-icons-left">
                                    <div className="select is-fullwidth">
                                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option>Wybierz Status</option>
                                            <option value="Nie rozpoczęty">Nie rozpoczęty</option>
                                            <option value="Do wykonania">Do wykonania</option>
                                            <option value="Wykonany">Wykonany</option>
                                        </select>
                                    </div>
                                    <span class="icon is-small is-left">
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Priorytet zadania</label>
                                <div className="control has-icons-left">
                                    <div className="select is-fullwidth">
                                        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                                            <option>Wybierz Priorytet</option>
                                            <option value="Wysoki">Wysoki</option>
                                            <option value="Średni">Średni</option>
                                            <option value="Niski">Niski</option>
                                        </select>
                                    </div>
                                    <span class="icon is-small is-left">
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Do kiedy wykonać?</label>
                                <div className="control has-icons-left">
                                    <input type="datetime-local" name="dueDate" id="date" className="input" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                                    <span class="icon is-small is-left">
                                        <i class="fa-solid fa-square-check"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field mt-5 is-grouped is-grouped-centered">
                                <button type="submit" className="button is-link p-5">Zaktualizuj zadanie</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default FormEditTasks;