import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField, Button} from "@mui/material";
import {getCustomerById} from '../common/apiUtility';

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
			customer: null
		}
	}

	componentDidUpdate(oldProps){
        if(this.props.para.customerId !== oldProps.para.customerId){
            getCustomerById(this.props.url, this.props.para.customerId, (json) => {this.setState({customer: json})});
        }
    }

	saveCustomer(customerData){


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
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => this.saveCustomer()}>Save</Button>
							<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(CustomerDetail);