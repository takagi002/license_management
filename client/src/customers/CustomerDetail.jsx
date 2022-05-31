import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField, Button} from "@mui/material";


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

		}
	}

	handleSave() {
		this.props.handelClose();
	}

	handelCancel() {
		this.props.handelClose();
	}
		
	render() {
		return (
			<div>
				{ this.props.currentCustomer &&
					<Dialog open={this.props.isOpen}>
						<DialogContent>
							<DialogTitle>Edit Customer {this.props.currentCustomer.name}</DialogTitle>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Customer Name"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.currentCustomer.name}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Address"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.currentCustomer.adresse}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Department"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.currentCustomer.department}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => this.handleSave}>Save</Button>
							<Button onClick={() => this.handelCancel}>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(CustomerDetail);