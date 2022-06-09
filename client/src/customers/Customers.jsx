import React from "react";
import { withStyles } from '@material-ui/core/styles';
import CustomerDetail from './CustomerDetail';
import {getCustomers, getUsers} from '../common/apiUtility';
import { Button, Typography} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

	closeEditor() {
		this.setState({isEditing: false});
		this.setState({selectedCustomer: null});
	}
    
	componentDidMount(){
		getCustomers(this.props.url, (json) => {this.setState({customers: json})});
		getUsers(this.props.url, (json) => {this.setState({users: json})});
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
						<Button startIcon={<DeleteIcon />}>Delete</Button>
						<Button>Contracts</Button>
						<Button>Users</Button>
						<div class='row-border'></div>
					</div>
				)})}
				<CustomerDetail para={this.state.editorParameters} isOpen={this.state.isEditing}></CustomerDetail>
			</div>
		);
	}
}

export default withStyles(styles)(Customers);