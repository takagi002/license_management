import React from "react";
import { withStyles } from '@material-ui/core/styles';
import CustomerDetail from './CustomerDetail';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl ="http://localhost:8080/";

class Customers extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			users: [],
			editing = false,
		}
	}
	
	status( response ) {
        if ( response.status >= 200 && response.status < 300 ) {
            return Promise.resolve( response )
        } else {
            return Promise.reject( new Error( response.statusText ) )
        }
    }
    
    isEditing = () => {
		this.setState({editing: true});
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
    render(){
		return (
			<div>{
				this.state.customers.map((customer, index) => {
					return (
					<div class="customerDetailGrid" key={index}>
						<span>{customer.name}</span>
						<span>{customer.adresse}</span>
						<span>{customer.department}</span>
						<button onClick={this.isEditing}>Edit</button>
						<button>Delete</button>
						<button>Contracts</button>
						<button>Users</button>
					</div>
				)})}
			</div>
		);
	}
}

export default withStyles(styles)(Customers);