import React from "react";
import { withStyles } from '@material-ui/core/styles';
import UserDetail from "./UserDetail";
import {getCustomers, getUsers, deleteUser, getUsersByCustomerId} from '../common/apiUtility';
import { Paper, Grid, Button, Typography} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

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
			customerId: customer,
			cancel: () => this.setState({isEditing: false}),
		}});
	}

	removeUser(userId, index){
		deleteUser(userId, this.props.url)

		const temp = this.state.usersOld.slice();
		temp.splice(index,1);

		this.setState({usersOld: temp});
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
				<Stack spacing={2} divider={<Divider orientation="horizontal" />}>
				{this.state.customers.map((customer, cIndex) => {
					return (
						<Item elevation={0}>
							<Grid container spacing={1} justifyContent="center" alignItems="center">
								<Grid item xs={2}><Typography>{customer.name}</Typography></Grid>
								<Grid item xs={10}>
								{this.state.usersOld.map((user, uIndex) => {
									if (user.customerId && user.customerId === customer.id)
									{
									return (
									<div class="userGrid" key={uIndex}>
										<Typography>{user.firstname} {user.name}</Typography>
										<Typography>{user.email}</Typography>
										<Button startIcon={<EditIcon />} onClick={() => this.openEditor(user, customer.id, uIndex)}>Edit</Button>
										<Button startIcon={<DeleteIcon />} onClick={() => this.removeUser(user.id, uIndex)}>Delete</Button>
									</div>
								)}})}
								</Grid>
							</Grid>
						</Item>
				)})}
				<div class='row-border'></div>
				<Item elevation={0}>
					<Grid container spacing={1} justifyContent="center" alignItems="center">
					<Grid item xs={2}><Typography>Without Customer</Typography></Grid>
						<Grid item xs={10}>
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
									</div>
								)}})}
						</Grid>
					</Grid>
				</Item>						
				</Stack>
				<UserDetail customers={this.state.customers} para={this.state.editorParameters} isOpen={this.state.isEditing}></UserDetail>
			</div>
		);
	}
}

export default withStyles(styles)(Users);
