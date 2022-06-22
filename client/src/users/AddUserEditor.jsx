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
	}

	handleChange = (event) => {
		if (event.target.id==="name") {
			this.setState({name: event.target.value});
		}
		if (event.target.id==="firstname") {
			this.setState({firstname: event.target.value});
		}
		if (event.target.id==="password") {
			this.setState({password: event.target.value});
		}
		if (event.target.id==="email") {
			this.setState({email: event.target.value});
		}
		if (event.target.id==="phoneNumber") {
			this.setState({phoneNumber: event.target.value});
		}
		if (event.target.id==="phoneNumberOptional") {
			this.setState({phoneNumberOptional: event.target.value});
		}
		if (event.target.id==="isAdministrator") {
			this.setState({isAdmin: event.target.value});
		}
	}

	addUser(userData){
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
									<MenuItem value={customer.customerId}>{customer.name}</MenuItem>
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
							onChange={this.handleChange}
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Last Name"
            				type="text"
            				fullWidth
            				variant="standard"
							onChange={this.handleChange}
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Email"
            				type="text"
            				fullWidth
            				variant="standard"
							onChange={this.handleChange}
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Phone"
            				type="text"
            				fullWidth
            				variant="standard"
							onChange={this.handleChange}
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Mobile"
            				type="text"
            				fullWidth
            				variant="standard"
							onChange={this.handleChange}
						/>
						<div>
                            <FormControlLabel control={<Checkbox/>} label="isAdministrator" onChange={this.handleChange}/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.addUser({
							id: 0,				    
        					name: this.state.name,
        					firstname: this.state.firstname,
        					username: "aow;efijaoweifnoaeiwfmwaoef",
        					password: this.state.password,
        					email: this.state.password,
        					phoneNumber: this.state.phoneNumber,
        					phoneNumberOptional: this.state.phoneNumberOptional,
        					isAdmin: this.state.admin,
        					customerId: this.state.customerId,
        					customerName: this.state.customerName
						})}>Submit</Button>
						<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(AddUserEditor);