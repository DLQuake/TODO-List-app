import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ximyohd', 'template_qd00s0n', form.current, 'PYZQAnBlBCWe5HnPD')
            .then((result) => {
                console.log(result.text);
                alert("Wiadomość została wysłana");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <form ref={form} onSubmit={sendEmail} className="columns is-centered">
                        <div className="column is-10">
                            <div className="box">
                                <h1 className="title has-text-centered">Kontakt</h1>
                                <div className="field">
                                    <label className="label">Imię i nazwisko</label>
                                    <div className="control has-icons-left">
                                        <input type="text" className="input" name="user_name" placeholder="Imię i nazwisko" />
                                        <span class="icon is-small is-left">
                                            <i class="fa-solid fa-user"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">E-mail</label>
                                    <div className="control has-icons-left">
                                        <input type="email" className="input" name="user_email" placeholder="E-mail" />
                                        <span class="icon is-small is-left">
                                            <i class="fa-solid fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Temat</label>
                                    <div className="control has-icons-left">
                                        <input type="text" className="input" name="subject" placeholder="Temat" />
                                        <span class="icon is-small is-left">
                                            <i class="fa-solid fa-message"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Wiadomość</label>
                                    <div class="control">
                                        <textarea class="textarea" rows="10" name="message" placeholder="Treść wiadomości..."></textarea>
                                    </div>
                                </div>
                                <div className="field mt-5 is-grouped is-grouped-centered">
                                    <button type="submit" className="button is-link p-5">Wyślij wiadomość</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
