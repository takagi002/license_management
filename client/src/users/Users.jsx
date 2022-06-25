import React from "react";
import { withStyles } from '@material-ui/core/styles';
import UserDetail from "./UserDetail";
import {getCustomers, getUsers, deleteUser, getUsersByCustomerId} from '../common/apiUtility';
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

class Users extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			users:[],
			usersOld: [],//depricated
			editorParameters: {},
			isEditing: false,

		}
	}
	
	openEditor(user, customer, index) {
		this.setState({isEditing: true});
		this.setState({editorParameters:{
			user,
			customer,
			cancel: () => this.setState({isEditing: false}),
			save: (user) => this.saveUser(),
		}});
	}

	removeUser(userId, index){
		deleteUser(userId, this.props.url)

		const temp = this.state.usersOld.slice();
		temp.splice(index,1);

		this.setState({usersOld: temp});
	}

	saveUser(user, index) {
		const temp = this.state.usersOld.slice();
		temp[index] = user;
		this.setState({usersOld: temp});
		
		// close window
		this.setState({isEditing: false})
	}

	componentDidMount(){
		getCustomers(this.props.url, (json) => {this.setState({customers: json})});
		//TODO: after api fix for customerId==0 add a custommer to custommers with id 0
		const customers = this.state.customers.slice();
		customers.forEach((customer) => {
			const users = getUsersByCustomerId(this.props.url, customer.id);
			customer.add(users);
		  });
		
		getUsers(this.props.url, (json) => {this.setState({usersOld: json})});
	}
	
	render() {
		return (
			<div>
				{this.state.customers.map((customer, cIndex) => {
					return (
					<div class="customerGrid" key={cIndex}>
						<Typography>{customer.name}</Typography>
						<div>
							{this.state.usersOld.map((user, uIndex) => {
								if (user.customerId && user.customerId === customer.id)
								{
								return (
								<div class="userGrid" key={uIndex}>
									<Typography>{user.firstname} {user.name}</Typography>
									<Typography>{user.email}</Typography>
									<Button startIcon={<EditIcon />} onClick={() => this.openEditor(user, customer, uIndex)}>Edit</Button>
									<Button startIcon={<DeleteIcon />} onClick={() => this.removeUser(user.id, uIndex)}>Delete</Button>
									<div class='row-border'></div>
								</div>
							)}})}
						</div>
						<div class='row-border'></div>
					</div>
				)})}
				<div class='row-border'></div>
				<div class="customerGrid" >
						<Typography>Without Customer</Typography>
						<div>
							{this.state.usersOld.map((user, index) => {
								const noCustomer = {
									id: null,
									name: "No Customer",

								}
								
								if (!user.customerId)
								{
								return (
								<div class="userGrid" key={index}>
									<Typography>{user.firstname} {user.name}</Typography>
									<Typography>{user.email}</Typography>
									<Button startIcon={<EditIcon />} onClick={() => this.openEditor(user, noCustomer, index)}>Edit</Button>
									<Button startIcon={<DeleteIcon />} onClick={() => this.removeUser(user.id, index)}>Delete</Button>
									<div class='row-border'></div>
								</div>
							)}})}
						</div>
					</div>
				<UserDetail customers={this.state.customers} para={this.state.editorParameters} isOpen={this.state.isEditing}></UserDetail>
			</div>
		);
	}
}

export default withStyles(styles)(Users);
