import { Footer } from "../Footer/Footer";
import "./main.css";


const Main = () => {

	return (
		<div className="main">
			<div className="main_container">
				Success Fully Logged in
			</div>
			<section style={{ height: "60vh" }} className="section">
					<div className="cards">
						<div className="card card-1">
							<div className="card__icon"><i className="fas fa-bolt"></i></div>
							<p className="card__exit"><i className="fas fa-times"></i></p>
							<h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
						
						</div>
						<div className="card card-2">
							<div className="card__icon"><i className="fas fa-bolt"></i></div>
							<p className="card__exit"><i className="fas fa-times"></i></p>
							<h2 className="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
						
						</div>
						<div className="card card-1">
							<div className="card__icon"><i className="fas fa-bolt"></i></div>
							<p className="card__exit"><i className="fas fa-times"></i></p>
							<h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
						
						</div>
						<div className="card card-3">
							<div className="card__icon"><i className="fas fa-bolt"></i></div>
							<p className="card__exit"><i className="fas fa-times"></i></p>
							<h2 className="card__title">Ut enim ad minim veniam.</h2>
						
						</div>
						<div className="card card-2">
							<div className="card__icon"><i className="fas fa-bolt"></i></div>
							<p className="card__exit"><i className="fas fa-times"></i></p>
							<h2 className="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
						
						</div>
						<div className="card card-4">
							<div className="card__icon"><i className="fas fa-bolt"></i></div>
							<p className="card__exit"><i className="fas fa-times"></i></p>
							<h2 className="card__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
						
						</div>
						
						<div className="card card-2">
							<div className="card__icon"><i className="fas fa-bolt"></i></div>
							<p className="card__exit"><i className="fas fa-times"></i></p>
							<h2 className="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
						
						</div>
						<div className="card card-1">
							<div className="card__icon"><i className="fas fa-bolt"></i></div>
							<p className="card__exit"><i className="fas fa-times"></i></p>
							<h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
						
						</div>
					</div>
			</section>
			<Footer />
		</div>
	);
};

export default Main;