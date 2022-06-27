import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Login from './login/Login';
import MainLayout from './MainLayout';
import Customers from "./customers/Customers";
import Logout from "@mui/icons-material/Logout";

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
			loggedIn: false,
			loggedInUser: null,
			mainParameters: {
				logout: () => this.setState({loggedIn: false, loggedInUser: null})
			}
		};
	}

	authorized = (user) => {
		this.setState({loggedInUser: user})
		this.setState({loggedIn: true});
	}

	render() {
		if (this.state.loggedIn) {
			return (
				<MainLayout para={this.state.mainParameters} loggedInUser={this.state.loggedInUser} url={theUrl}></MainLayout> 
			);
		} else {
			return (
			<Login url={theUrl} authorized = {this.authorized}></Login> 
			);
		}
	}
}

export default withStyles(styles)(App);

