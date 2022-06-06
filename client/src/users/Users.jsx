import React from "react";
import { withStyles } from '@material-ui/core/styles';
import UserDetail from "./UserDetail";
import {fetchCustomers, fetchUsers} from '../common/apiUtility';
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
			isEditing: false,
			selectedUser: null,
		}
	}
	
	openEditor = (user) => {
		this.setState({isEditing: true});
		this.setState({selectedUser: user})
	}

	componentDidMount(){
		fetchCustomers(this.props.url, (json) => {this.setState({customers: json})});
		fetchUsers(this.props.url, (json) => {this.setState({users: json})});
	}
	
	render() {
		return (
			<div>{
				this.state.customers.map((customer, index) => {
					return (
					<div class="customerGrid" key={index}>
						<Typography variant="body1" gutterBottom>
						{customer.name}	
     					</Typography>
						<div>{
							this.state.users.map((user, index) => {
								if (user.customer)
								{
								return (
								<div class="userGrid" key={index}>
									<div class='row-border'></div>
									<Typography variant="body1" gutterBottom>
									{user.firstname} {user.name}
     					 			</Typography>
									<Typography variant="body1" gutterBottom>
									{user.email}
     					 			</Typography>
									<Button startIcon={<EditIcon />} onClick={() => this.openEditor(user)}>Edit</Button>
									<Button startIcon={<DeleteIcon />} >Delete</Button>
								</div>
							)}})}
						</div>
						<div class='row-border'></div>
					</div>
				)})}
				<UserDetail currentUser={this.state.selectedUser} isOpen={this.state.isEditing}></UserDetail>
			</div>
		);
	}
}

export default withStyles(styles)(Users);
