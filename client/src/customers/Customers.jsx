import React from "react";
import { withStyles } from '@material-ui/core/styles';
import CustomerDetail from './CustomerDetail';
import {getCustomers, getUsers, deleteCustomer, getContracts} from '../common/apiUtility';
import { Paper, Button, Typography, Grid } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContractListView from "./ContractListView";
import UserListView from "./UserListView";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: '12px',
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
  
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
			viewContractsParameters: {},
			viewUsersParameters: {}
		}
	}
	
    openEditor(customerId, index) {
		this.setState({isEditing: true});
		this.setState({editorParameters:{
			customerId: customerId,
			index: index,
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
		
		this.setState({viewContractsParameters:{
			customer: customerName,
			customerId: customerId,
			cancel: () => this.setState({isViewingContracts: false}),
		}});
	}

	viewUsers(customerName, customerId){
		this.setState({isViewingUsers: true});

		this.setState({viewUsersParameters:{
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
			<div>
				<Stack spacing={2} divider={<Divider orientation="horizontal" />}>{
				this.state.customers.map((customer, index) => {
					return (
						
						<Item elevation={0}>
							<Grid container spacing={1} justifyContent="center" alignItems="center">
								<Grid item xs={2}><Typography variant="body1" gutterBottom>{customer.name}</Typography></Grid>
								<Grid item xs={3}><Typography variant="body1" gutterBottom>{customer.address}</Typography></Grid>
								<Grid item xs={3}><Typography variant="body1" gutterBottom>{customer.addressOptional}</Typography></Grid>
								<Grid item><Button startIcon={<EditIcon />} onClick={() => this.openEditor(customer.id, index)}>Edit</Button></Grid>
								<Grid item><Button startIcon={<DeleteIcon />} onClick={() => this.removeCustomer(customer.id, index)}>Delete</Button></Grid>
								<Grid item><Button onClick={() => this.viewContracts(customer.name, customer.id)}>Contracts</Button></Grid>
								<Grid item><Button onClick={() => this.viewUsers(customer.name, customer.id)}>Users</Button></Grid>
							</Grid>
						</Item>
						
				)})}
				</Stack>
				<CustomerDetail url={this.props.url} para={this.state.editorParameters} isOpen={this.state.isEditing}></CustomerDetail>
				<ContractListView url={this.props.url} para={this.state.viewContractsParameters} isOpen={this.state.isViewingContracts}></ContractListView>
				<UserListView url={this.props.url} para={this.state.viewUsersParameters} isOpen={this.state.isViewingUsers}></UserListView>
			</div>	
		);
	}
}

export default withStyles(styles)(Customers);