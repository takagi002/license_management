import React from "react";
import { withStyles } from '@material-ui/core/styles';
import UserDetail from "./UserDetail";
import {fetchCustomers, fetchUsers} from '../common/apiUtility';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl ="http://localhost:8080/";

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
		this.setState({editing: true});
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
						<span>{customer.name}</span>
						<div>{
							this.state.users.map((user, index) => {
								if (user.customer)
								{
								return (
								<div class="userGrid" key={index}>
									<div>{user.firstname} {user.name}</div>
									<div>{user.email}</div>
									<button onClick={() => this.openEditor(user)}>Edit</button>
									<button>Delete</button>
								</div>
							)}})}
						</div>
					</div>
				)})}
				<UserDetail currentUser={this.state.selectedUser} isOpen={this.state.isEditing}></UserDetail>
			</div>
		);
	}
}

export default withStyles(styles)(Users);
