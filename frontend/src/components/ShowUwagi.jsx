import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowUwagi = () => {
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [opis, setOpis] = useState("");
    const [uwagiOdRecenzenta, setUwagiOdRecenzenta] = useState("");
    const [informacjeOdRedaktora, setInformacjeOdRedaktora] = useState("");
    const [odpowiedzOdAutora, setOdpowiedzOdAutora] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getPublicationById = async () => {
            const response = await axios.get(`http://localhost:5000/publications/${id}`);
            setStatus(response.data.status);
            setTitle(response.data.tytul);
            setOpis(response.data.opis);
            setUwagiOdRecenzenta(response.data.uwagiOdRecenzenta);
            setInformacjeOdRedaktora(response.data.informacjeOdRedaktora);
            setOdpowiedzOdAutora(response.data.odpowiedzOdAutora);
        };
        getPublicationById();
    }, [id]);

    return (
        <div>
            <h1 className="title">Artykuł - {title}</h1>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <div className="columns">
                            <div className="column">
                                <strong>Tytuł artykułu:</strong>
                                <p>{title}</p>
                            </div>
                            <div className="column">
                                <strong>Opis artykułu:</strong>
                                <p>{opis}</p>
                            </div>
                            <div className="column">
                                <strong>Aktualny status:</strong>
                                <p>{status}</p>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                <div className="title">Informacje od Redaktora</div>
                                <textarea class="textarea" rows="10" value={informacjeOdRedaktora} disabled></textarea>
                            </div>
                            <div className="column">
                                <div className="title">Uwagi od Recenzenta</div>
                                <textarea class="textarea" rows="10" value={uwagiOdRecenzenta} disabled></textarea>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                <div className="title">Odpowiedź od Autora</div>
                                <textarea class="textarea" rows="10" value={odpowiedzOdAutora} disabled></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowUwagi;
