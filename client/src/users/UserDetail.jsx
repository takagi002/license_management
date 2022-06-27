import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TextField , FormControlLabel, FormGroup} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getUser, putUser } from '../common/apiUtility';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

class UserDetail extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			customers: [],
			customerId: "",
			name: "",
			firstname: "",
			email: "",
			password:"",
			phone: "",
			mobile: "",
			admin: false
		}
	}

	componentDidUpdate(oldProps){
        if(this.props.para.userId !== oldProps.para.userId){
            getUser(this.props.para.userId, this.props.url, (json) => {this.setState({user: json,
				customerId: json.customerId,
				name: json.name,
				firstname: json.firstname,
				email: json.email,
				password: json.password,
				phone: json.phoneNumber,
				mobile: json.phoneNumberOptional,
				admin: json.admin
				})});

        }
    }


	handleCustomerChange = (event) => {
		this.setState({customerId: event.target.value})
	}
	handleFirstNameChange = (event) => {
		this.setState({firstname: event.target.value})
	}
	handleNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	handleEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	handlePasswordChange = (event) => {
		this.setState({password: event.target.value})
	}
	handlePhoneChange = (event) => {
		this.setState({phone: event.target.value})
	}
	handleMobileChange = (event) => {
		this.setState({mobile: event.target.value})
	}
	handleAdminChange = (event) => {
		this.setState({admin: event.target.value})
	}


	saveUser(userData){
		putUser(userData, this.props.url)
		this.setState({user: null})

		this.props.para.cancel()
	}
	
	render() {
		return (
			<div>
				{ this.state.user &&
					<Dialog open={this.props.isOpen}>
						<DialogContent>
							<DialogTitle>Editing User {this.state.user.firstname}</DialogTitle>
							<FormControl fullWidth>
  								<InputLabel id="demo-simple-select-label">Customer</InputLabel>
  								<Select
								  onChange={this.handleCustomerChange}
  								  labelId="demo-simple-select-label"
  								  id="demo-simple-select"
  								  value={this.state.customerName}
								  label="Customer"
								  defaultValue={this.state.user.customerId}
  								>
  								  <MenuItem value={null}>No Customer</MenuItem>
  								  {this.props.customers.map((customer, index) => {
									return (
										<MenuItem value={customer.id}>{customer.name}</MenuItem>
									)})}
  								</Select>
							</FormControl>
							<TextField
            					autoFocus
            					margin="dense"
            					id="firstname"
            					label="First Name"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.state.user.firstname}
								onChange={this.handleFirstNameChange}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Last Name"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.state.user.name}
								onChange={this.handleNameChange}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="email"
            					label="Email"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.state.user.email}
								onChange={this.handleEmailChange}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="password"
            					label="Password"
            					type="password"
            					fullWidth
            					variant="standard"
								defaultValue={this.state.user.password}
								onChange={this.handlePasswordChange}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="phone"
            					label="Phone"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.state.user.phoneNumber}
								onChange={this.handlePhoneChange}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="mobile"
            					label="Mobile"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.state.user.phoneNumberOptional}
								onChange={this.handleMobileChange}
							/>
							<div>
								<FormGroup>
								        {(() => {
											if (this.state.user.admin) {
											  return (
												<FormControlLabel onChange={this.handleAdminChange} control={<Checkbox defaultChecked/>} label="isAdministrator" disabled={!this.props.loggedInUser.admin}/>
											  )
											} else {
											  return (
												<FormControlLabel onChange={this.handleAdminChange} control={<Checkbox/>} label="isAdministrator" disabled={!this.props.loggedInUser.admin}/>
											  )
											}
										})()}
								</FormGroup>
							</div>
						</DialogContent>

						<DialogActions>
							<Button onClick={() => this.saveUser({
							id: this.state.user.id,				    
        					name: this.state.name,
        					firstname: this.state.firstname,
        					username: this.state.user.username, 
        					password: this.state.password,
        					email: this.state.email,
        					phoneNumber: this.state.phone,
        					phoneNumberOptional: this.state.mobile,
        					customerId: this.state.customerId,
							customerName: null,
							admin: this.state.admin
						})} >Save</Button>
							<Button onClick={() => {this.props.para.cancel(); this.setState({user: null})}}>Cancel</Button>
						</DialogActions>
					</Dialog>
					
				}
				
			</div>
		);
	}
}

export default withStyles(styles)(UserDetail);