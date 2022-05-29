import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Login from './Login';
import Users from './Users';
import Customers from './Customers';
import Contracts from './Contracts';

const styles = theme => ({
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl ="http://localhost:8080/";

class App extends React.Component {

	constructor(props) {
		super(props);
	    this.state = {	  
			loggedIn: true,
		};
	}

	authorized = () => {
		this.setState({loggedIn: true});
	}
  
	render() {
		if (this.state.loggedIn) {
			return (
			<Contracts url={theUrl} ></Contracts> 
			);
		} else {
			return (
			<Login url={theUrl} authorized = {this.authorized}></Login> 
			);
		}
	}
}

export default withStyles(styles)(App);

