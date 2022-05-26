import React from "react";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({});

const theUrl ="http://localhost:8080/";

class Users extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			users: [],
		}
	}
	
	status( response ) {
        if ( response.status >= 200 && response.status < 300 ) {
            return Promise.resolve( response )
        } else {
            return Promise.reject( new Error( response.statusText ) )
        }
    }

	componentDidMount(){
		this.fetchCustomers()
		this.fetchUsers()
	}


	fetchCustomers(){
		fetch( this.props.url + "customers")
            .then( this.status )
            .then( (response) => { return response.json() } )
			.then( (json) => {this.setState({customers: json})})
            .catch( function( error ) {
                console.log( 'Request failed', error );
            });
	}
	
	fetchUsers(){
		fetch(this.props.url + "users")
			.then( this.status )
			.then( (response) => {return response.json() } )
			.then( (json) => {this.setState({users: json})})
			.catch( function( error ) {
                console.log( 'Request failed', error );
            });
	}
	
	render() {
		return (
			<div>{
				this.state.customers.map((customer, index) => {
					return (
					<div class="customerGrid" key={index}>
						<span>{customer.name}</span>
						<div>{
							this.state.users.map((user, index, customer) => {
								if (user.customer.id == customer.id) {return (
								<div class="userGrid" key={index}>
									<div>{user.firstname} {user.name}</div>
									<div>{user.email}</div>
									<button>Edit</button>
									<button>Delete</button>
								</div>
							)}})}
						</div>
					</div>
				)})}
			</div>
		);
	}
}

export default withStyles(styles)(Users);
