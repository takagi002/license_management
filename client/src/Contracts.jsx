import React from "react";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl ="http://localhost:8080/";

class Contracts extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			contracts: [],
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
		this.fetchContracts()
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
	
	fetchContracts(){
		fetch(this.props.url + "contracts")
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
							this.state.contracts.map((contract, index) => {
								if (customer.id === contract.customer.id)
								{
								return (
								<div class="contractGrid" key={index}>
									<div>{contract.startDate}</div>
									<div>{contract.endDate}</div>
									<div>{contract.endDate}</div>
									<button>Edit</button>
									<button>Delete</button>
									<button>Details</button>
								</div>
							)}})}
						</div>
					</div>
				)})}
			</div>
		);
	}
}

export default withStyles(styles)(Contracts);