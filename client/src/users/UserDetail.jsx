import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TextField , FormControlLabel, FormGroup} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
			customers: [],
			name: "",
			firstname: "",
			email: "",
			password:"",
			phone: "",
			mobile: "",
			admin: false
		}
	}


	handleCustomerChange = (event) => {
		this.setState({customerName: event.target.value})
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

		this.props.para.cancel()
	}
	
	render() {
		return (
			<div>
				{ this.props.para.user &&
					<Dialog open={this.props.isOpen}>
						<DialogContent>
							<DialogTitle>Editing User {this.props.para.user.firstname}</DialogTitle>
							<FormControl fullWidth>
  								<InputLabel id="demo-simple-select-label">Customer</InputLabel>
  								<Select
								  onChange={this.handleCustomerChange}
  								  labelId="demo-simple-select-label"
  								  id="demo-simple-select"
  								  value={this.state.customerId}
								  label="Customer"
								  defaultValue={this.props.para.user.customerId}
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
								defaultValue={this.props.para.user.firstname}
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
								defaultValue={this.props.para.user.name}
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
								defaultValue={this.props.para.user.email}
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
								defaultValue={this.props.para.user.password}
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
								defaultValue={this.props.para.user.phoneNumber }
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
								defaultValue={this.props.para.user.phoneNumberOptional}
								onChange={this.handleMobileChange}
							/>
							<div>
								<FormGroup>
								        {(() => {
											if (this.props.para.user.admin) {
											  return (
												<FormControlLabel onChange={this.handleAdminChange} control={<Checkbox defaultChecked/>} label="isAdministrator" />
											  )
											} else {
											  return (
												<FormControlLabel onChange={this.handleAdminChange} control={<Checkbox/>} label="isAdministrator" />
											  )
											}
										})()}
								</FormGroup>
							</div>
						</DialogContent>

						<DialogActions>
							<Button onClick={() => this.saveUser({
								//TODO: update changed fields
							})} >Save</Button>
							<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
						</DialogActions>
					</Dialog>
					
				}
				
			</div>
		);
	}
}

export default withStyles(styles)(UserDetail);