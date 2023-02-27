import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<section className="hero">
			<div className="hero-body">
				<div className="container">
					<div className="column is-10">
						<div className="box">
							<h1 className="title has-text-centered">Panel Główny</h1>
							<h2 className="subtitle has-text-centered">
								Witaj użytkowniku <strong>{user && user.imie} {user && user.nazwisko}</strong>
								<br />
								Rola użytkownika: {user && user.role}
							</h2>

							<div className="content">
								<p>Po zalogowaniu się do panelu głównego aplikacji TODO, będziesz mieć dostęp do pełnej listy swoich zadań. Na stronie głównej zobaczysz listę wszystkich zadań, które utworzyłeś, wraz z ich tytułami, terminami wykonania i priorytetami.</p>
								<p>Możesz łatwo zarządzać swoimi zadaniami, dodawać nowe, modyfikować już istniejące lub usuwać nieaktualne zadania. Wszystkie te opcje znajdziesz w intuicyjnym panelu nawigacyjnym.</p>
								<p>Panel nawigacyjny umożliwia również filtrowanie zadań według priorytetów, terminów wykonania oraz kategorii. To pozwoli Ci na szybsze znalezienie najważniejszych zadań i skupienie się na ich realizacji.</p>
								<p>W aplikacji TODO znajdziesz również opcję dodawania notatek do swoich zadań oraz możliwość oznaczania zadań jako ukończone, co pozwoli Ci śledzić postępy w realizacji swoich zadań.</p>
								<p>Jeśli szukasz prostego i skutecznego narzędzia do organizacji i zarządzania swoimi zadaniami, aplikacja TODO jest idealnym rozwiązaniem dla Ciebie. Zaloguj się już dziś i zacznij skuteczniej zarządzać swoim czasem i zadaniami.</p>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
