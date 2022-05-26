import React from "react";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({});

const theUrl ="http://localhost:8080/";

class Users extends React.Component {
	customers = [];
	
	status( response ) {
        if ( response.status >= 200 && response.status < 300 ) {
            return Promise.resolve( response )
        } else {
            return Promise.reject( new Error( response.statusText ) )
        }
    }

	componentDidUpdate(){
		this.customers = this.fetchCustomers()
	}

	fetchCustomers(){
		return fetch( this.props.url + "customers")
            .then( this.status )
            .then( (response) => { return response.json() } )
            .catch( function( error ) {
                console.log( 'Request failed', error );
            });
	}
	
	fetchUsers(){
		
	}
	
	render() {
		return (
			<div>{
				this.customers.map((customer, index) => {
					return (
					<div class="customerGrid">
						<span>{customer.name}</span>
						<div>
							for(let user of users){
								<div class="userGrid">
									<div>User Name</div>
									<div>UserEmail</div>
									<button>Edit</button>
									<button>Delete</button>
								</div>
							}
						</div>
					</div>
				)})}
			</div>
		);
	}
}

export default withStyles(styles)(Users);
