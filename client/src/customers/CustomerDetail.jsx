import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField, Button} from "@mui/material";
import {getCustomerById, putCustomer} from '../common/apiUtility';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

class CustomerDetail extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customer: null,
			name: "",
			address: "",
			optAddress: "",
			department: ""
		}
	}

	componentDidUpdate(oldProps){
        if(this.props.para.customerId !== oldProps.para.customerId){
            getCustomerById(this.props.url, this.props.para.customerId, (json) => {this.setState({customer: json,
				name: json.name,
				address: json.address,
				optAddress: json.addressOptional,
				department: json.department
			})});
        }
    }

	handleNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	handleAddressChange = (event) => {
		this.setState({address: event.target.value})
	}
	handleOptAddressChange = (event) => {
		this.setState({optAddress: event.target.value})
	}
	handleDepartmentChange = (event) => {
		this.setState({department: event.target.value})
	}

	saveCustomer(customerData){
		putCustomer(customerData, this.props.url)
		this.props.para.cancel()
	}
		
	render() {
		return (
			<div>
				{ this.state.customer &&
					<Dialog open={this.props.isOpen}>
						<DialogContent>
							<DialogTitle>Edit Customer {this.state.customer.name}</DialogTitle>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Customer Name"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.customer.name}
								onChange={this.handleNameChange}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Address"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.customer.address}
								onChange={this.handleAddressChange}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Optional Address"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.customer.addressOptional}
								onChange={this.handleOptAddressChange}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Department"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.customer.department}
								onChange={this.handleDepartmentChange}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => this.saveCustomer({
								id: this.state.customer.id,
								name: this.state.name,
								address: this.state.address,
								addressOptional: this.state.optAddress,
								department: this.state.department
							})}>Save</Button>
							<Button onClick={() => {this.props.para.cancel(); this.setState({customer: null})}}>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(CustomerDetail);