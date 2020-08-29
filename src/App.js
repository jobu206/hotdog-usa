import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Coaches from './Components/Coaches';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={AboutUs} />
				<Route exact path='/coaches' component={Coaches} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
