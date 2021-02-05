import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ThankYou from './components/ThankYou';


const App = () => {

	return (
		<Router>
			<nav className="navbar sticky-top navbar-light justify-content-center">
				<Link to='/ThankYou'>
					<button className="btn btn-outline-secondary" type="button">Thank You!</button>
				</Link>
			</nav>
			<Switch>
				<Route path="/ThankYou" component={ThankYou} />
			</Switch>
		</Router>
	)
};



export default App;