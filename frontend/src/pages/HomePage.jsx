import React from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";

const HomePage = () => {
    return (
        <React.Fragment>
            <NavbarHome />
            <section className="section has-background-link">
                <div class="content has-background-white p-6">
                    <h1>Serdecznie witamy na Portalu Czasopisma Naukowego!</h1>
                    <p>Witamy w naszym czasopiśmie naukowym z dziedziny <strong>Informatyki oraz matematyki</strong>. Nasze czasopismo służy społeczności naukowej od <strong>20</strong> lat, stanowiąc platformę do publikacji przełomowych badań i innowacyjnych pomysłów.</p>
                    <h2>Cel i misja</h2>
                    <p>Naszą misją jest promowanie postępu wiedzy w naszej dziedzinie poprzez publikowanie wysokiej jakości recenzowanych artykułów. Staramy się publikować artykuły interesujące szerokie grono badaczy, praktyków i studentów. Nasze czasopismo obejmuje szeroki zakres tematów w ramach <strong>Informatyki oraz matematyki</strong>, w tym:</p>
                    <ul>
                        <li>Sieci komputerowe</li>
                        <li>Systemy operacyjne</li>
                        <li>Programowanie i algorytmy</li>
                        <li>Grafika komputerowa i wizualizacja</li>
                        <li>Bezpieczeństwo informatyczne</li>
                        <li>Sztuczna inteligencja i uczenie maszynowe</li>
                        <li>Analiza matematyczna</li>
                        <li>Algebra i teoria liczb</li>
                        <li>Geometria</li>
                        <li>Równanie różniczkowe i całkowanie</li>
                        <li>Statystyka i probabilistyka</li>
                        <li>Równanie różniczkowe i całkowanie</li>
                        <li>Teoria grafów</li>
                    </ul>

                    <h2>Zespół redakcyjny</h2>
                    <p>Nasz zespół redakcyjny składa się z ekspertów w swoich dziedzinach, którzy niestrudzenie pracują, aby każdy publikowany przez nas artykuł spełniał najwyższe standardy jakości i dokładności. Ściśle współpracujemy również <br />z międzynarodowym zespołem wysoko wykwalifikowanych recenzentów, aby zapewnić uczciwą i obiektywną ocenę każdego zgłoszenia.</p>

                    <h2>Zapraszamy</h2>
                    <p>Czekamy na zgłoszenia od autorów z całego świata i zachęcamy do składania swoich prac. Nasze wytyczne dotyczące przesyłania prac można znaleźć na naszej stronie internetowej w zakładce <Link to="/informacje_dla_autorow">"Informacje dla autorów"</Link>, a nasza redakcja zawsze chętnie odpowie na wszelkie pytania lub udzieli pomocy w procesie przesyłania.</p>
                    <p>Jeżeli sa jakieś pytania należy przejść na stronę <Link to="/kontakt">"Kontakt"</Link> i napisać wiadomość za pomocą formularza kontaktowego</p>
                    <h1>Czekamy!</h1>
                </div>
            </section>
        </React.Fragment>
    );
};

export default HomePage;
