import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField, Button} from "@mui/material";
import { putCustomer } from "../common/apiUtility";

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

class AddCustomerEditor extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			address: "",
			department: ""
		}
	}

	handleNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	handleAddressChange = (event) => {
		this.setState({address: event.target.value})
	}
	handleDepartmentChange = (event) => {
		this.setState({department: event.target.value})
	}

	addCustomer(customerData){
		putCustomer(customerData, this.props.url)
		this.props.para.cancel()
	}
		
	render() {
		return (
			<div>
				<Dialog open={this.props.isOpen}>
					<DialogContent>
						<DialogTitle>New Customer</DialogTitle>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Customer Name"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleNameChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="address"
							label="Address"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleAddressChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="department"
							label="Department"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleDepartmentChange}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.addCustomer({
							customerId: 0,
							name: this.state.name,
							adresse: this.state.address,
							department: this.state.department
						})}>Submit</Button>
						<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(AddCustomerEditor);