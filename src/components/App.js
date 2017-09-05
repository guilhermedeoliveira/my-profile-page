import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import NavBar from './NavBar';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<NavBar />
						<Route path="/" component={Home} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
