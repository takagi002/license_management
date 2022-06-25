import React from "react";
import { withStyles } from '@material-ui/core/styles';
import CustomerDetail from './CustomerDetail';
import {getCustomers, getUsers, deleteCustomer, getContracts} from '../common/apiUtility';
import { Button, Typography} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContractListView from "./ContractListView";
import UserListView from "./UserListView";

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
			contracts: [],
			isEditing: false,
			isViewingContracts: false,
			isViewingUsers: false,
			editorParameters: {},
		}
	}
	
    openEditor(customer, index) {
		this.setState({isEditing: true});
		this.setState({editorParameters:{
			customer,
			index,
			cancel: () => this.setState({isEditing: false}),
			save: () => this.saveCustomer(),
		}});
	}

	saveCustomer(customer, index){
		const temp = this.state.customers.slice();
		temp[index] = customer;
		this.setState({customer: temp});
		
		// close window
		this.setState({isEditing: false})
	}

	removeCustomer(customerId, index){
		deleteCustomer(customerId, this.props.url)

		const temp = this.state.customers.slice();
		temp.splice(index,1);

		this.setState({customers: temp});
	}
	
	viewContracts(customerName, customerId) {
		this.setState({isViewingContracts: true});
		
		this.setState({editorParameters:{
			customer: customerName,
			customerId: customerId,
			cancel: () => this.setState({isViewingContracts: false}),
		}});
	}

	viewUsers(customerName, customerId){
		this.setState({isViewingUsers: true});

		this.setState({editorParameters:{
			customer: customerName,
			customerId: customerId,
			cancel: () => this.setState({isViewingUsers: false}),
		}});
	}

	closeEditor() {
		this.setState({isEditing: false});
		this.setState({selectedCustomer: null});
	}
    
	componentDidMount(){
		getCustomers(this.props.url, (json) => {this.setState({customers: json})});
		getUsers(this.props.url, (json) => {this.setState({users: json})});
		getContracts(this.props.url, (json) => {this.setState({contracts: json})});
	}


    render(){
		return (
			<div>{
				this.state.customers.map((customer, index) => {
					return (
					<div class="customerDetailGrid" key={index}>
						<Typography variant="body1" gutterBottom>{customer.name}</Typography>
						<Typography variant="body1" gutterBottom>{customer.adresse}</Typography>
						<Typography variant="body1" gutterBottom>{customer.department}</Typography>
						<Button startIcon={<EditIcon />} onClick={() => this.openEditor(customer, index)}>Edit</Button>
						<Button startIcon={<DeleteIcon />} onClick={() => this.removeCustomer(customer.id, index)}>Delete</Button>
						<Button onClick={() => this.viewContracts(customer.name, customer.id)}>Contracts</Button>
						<Button onClick={() => this.viewUsers(customer.name, customer.id)}>Users</Button>
						<div class='row-border'></div>
					</div>
				)})}
				<CustomerDetail para={this.state.editorParameters} isOpen={this.state.isEditing}></CustomerDetail>
				<ContractListView url={this.props.url} para={this.state.editorParameters} isOpen={this.state.isViewingContracts}></ContractListView>
				<UserListView url={this.props.url} para={this.state.editorParameters} isOpen={this.state.isViewingUsers}></UserListView>
			</div>
		);
	}
}

export default withStyles(styles)(Customers);