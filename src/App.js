import CallToAction from "./components/CallToAction/CallToAction";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shortens from "./components/Shortens/Shortens";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Form />
			<Shortens />
			<Features />
			<CallToAction />
			<Footer />
		</div>
	);
};

export default App;
