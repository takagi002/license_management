import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TextField , FormControlLabel} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {putUser} from '../common/apiUtility';


const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

class AddUserEditor extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			customerId: null,	
			customer: null,		    
        	name: "",
        	firstname: "",
        	password: "",
        	email: "",
        	phoneNumber: "",
        	phoneNumberOptional: "",
        	isAdmin: false,
        	customerId: "",
        	customerName: ""
		}
	}

	handleCustomerChange = (event) => {
		this.setState({customerId: event.target.value})

		this.setState({customer: 
			this.state.customers.find(customer => customer.id === this.state.customerId) })
	}

	handleNameChange = (event) => {
		this.setState({name: event.target.value});
	}
	handleFirstnameChange = (event) => {
		this.setState({firstname: event.target.value});
	}
	handlePasswordChange = (event) => {	
		this.setState({password: event.target.value});
	}
	handleEmailChange = (event) => {
		this.setState({email: event.target.value});
	}
	handlePhoneChange = (event) => {
		this.setState({phoneNumber: event.target.value});
	}
	handleOptPhoneChange = (event) => {
		this.setState({phoneNumberOptional: event.target.value});
	}
	handleAdminChange = (event) => {
		this.setState({isAdmin: event.target.checked});
	}

	saveUser(userData){
		putUser(userData, this.props.url)
		this.props.para.cancel()
	}

	render() {
		return (
			<div>
				<Dialog open={this.props.isOpen}>
					<DialogContent>
						<DialogTitle>New User</DialogTitle>
						<FormControl fullWidth>
  							<InputLabel id="demo-simple-select-label">Customer</InputLabel>
  							<Select
							  onChange={this.handleCustomerChange}
  							  labelId="demo-simple-select-label"
  							  id="customer"
  							  value={this.state.customerId}
							  label="Customer"
  							>
								<MenuItem value={0}>No Customer</MenuItem>
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
							onChange={this.handleFirstnameChange}
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Last Name"
            				type="text"
            				fullWidth
            				variant="standard"
							onChange={this.handleNameChange}
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Email"
            				type="text"
            				fullWidth
            				variant="standard"
							onChange={this.handleEmailChange}
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Phone"
            				type="text"
            				fullWidth
            				variant="standard"
							onChange={this.handlePhoneChange}
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Mobile"
            				type="text"
            				fullWidth
            				variant="standard"
							onChange={this.handleOptPhoneChange}
						/>
						<div>
                            <FormControlLabel control={<Checkbox/>} label="isAdministrator" onChange={this.handleAdminChange}/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.saveUser({
							id: 0,				    
        					name: this.state.name,
        					firstname: this.state.firstname,
        					username: this.state.email.substring(0,8), /*TODO: autogen the username*/
        					password: this.state.password,
        					email: this.state.email,
        					phoneNumber1: this.state.phoneNumber,
        					phoneNumber2: this.state.phoneNumberOptional,
        					customer: {
								customerId: 0,
								name: "a customer",
								adresse: "addaress",
								department: "car"
							},
							admin: this.state.isAdmin
						})}>Submit</Button>
						<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(AddUserEditor);