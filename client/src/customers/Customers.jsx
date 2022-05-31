import React from "react";
import { withStyles } from '@material-ui/core/styles';
import CustomerDetail from './CustomerDetail';
import {fetchCustomers, fetchUsers} from '../common/apiUtility';


const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

class Customers extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			users: [],
			isEditing: false,
			selectedCustomer: null
		}
	}
	
    
    openEditor(customer) {
		this.setState({isEditing: true});
		this.setState({selectedCustomer: customer});
	}
	closeEditor() {
		this.setState({isEditing: false});
		this.setState({selectedCustomer: null});
	}
    
	componentDidMount(){
		fetchCustomers(this.props.url, (json) => {this.setState({customers: json})});
		fetchUsers(this.props.url, (json) => {this.setState({users: json})});
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
						<button onClick={() => this.openEditor(customer)}>Edit</button>
						<button>Delete</button>
						<button>Contracts</button>
						<button>Users</button>
					</div>
				)})}
				<CustomerDetail currentCustomer={this.state.selectedCustomer} isOpen={this.state.isEditing} handelClose={this.closeEditor}></CustomerDetail>
			</div>
		);
	}
}

export default withStyles(styles)(Customers);