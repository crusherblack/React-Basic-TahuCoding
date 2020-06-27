import React, { useState } from 'react';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Crud from './pages/Crud';
import Increament from './pages/Increament';

import './App.css';

const App = () => {
	const headerTitle = 'HEADER MANTAP';
	const footerTitle = 'FOOTER KEREN';
	return (
		<div>
			<Router>
				<Header headerTitle={headerTitle} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/crud" component={Crud} />
					<Route exact path="/increament" component={Increament} />
				</Switch>
				<Footer footerTitle={footerTitle} />
			</Router>
		</div>
	);
};

export default App;
