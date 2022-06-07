import React from "react";
import { withStyles } from '@material-ui/core/styles';
import UserDetail from "./UserDetail";
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

class Users extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			users: [],
			editorParameters: {},
			isEditing: false,

		}
	}
	
	openEditor(user, index) {
		this.setState({isEditing: true});
		this.setState({editorParameters:{
			user,
			index,
			cancel: () => this.setState({isEditing: false}),
			save: () => this.saveUser(),
		}});
	}
	saveUser(user, index) {
		const temp = this.state.users.slice();
		temp[index] = user;
		this.setState({users: temp});
		
		// close window
		this.setState({isEditing: false})
	}

	componentDidMount(){
		getCustomers(this.props.url, (json) => {this.setState({customers: json})});
		getUsers(this.props.url, (json) => {this.setState({users: json})});
	}
	
	render() {
		return (
			<div>
				{this.state.customers.map((customer, cIndex) => {
					return (
					<div class="customerGrid" key={cIndex}>
						<Typography>{customer.name}</Typography>
						<div>
							{this.state.users.map((user, uIndex) => {
								if (user.customer && user.customer.customerId === customer.customerId)
								{
								return (
								<div class="userGrid" key={uIndex}>
									<Typography>{user.firstname} {user.name}</Typography>
									<Typography>{user.email}</Typography>
									<Button startIcon={<EditIcon />} onClick={() => this.openEditor(user, uIndex)}>Edit</Button>
									<Button startIcon={<DeleteIcon />}>Delete</Button>
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
							{this.state.users.map((user, index) => {

								if (!user.customer)
								{
								return (
								<div class="userGrid" key={index}>
									<Typography>{user.firstname} {user.name}</Typography>
									<Typography>{user.email}</Typography>
									<Button startIcon={<EditIcon />} onClick={() => this.openEditor(user, index)}>Edit</Button>
									<Button startIcon={<DeleteIcon />}>Delete</Button>
									<div class='row-border'></div>
								</div>
							)}})}
						</div>
					</div>
				<UserDetail para={this.state.editorParameters} isOpen={this.state.isEditing}></UserDetail>
			</div>
		);
	}
}

export default withStyles(styles)(Users);
