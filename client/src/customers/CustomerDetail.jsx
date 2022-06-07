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
		
	render() {
		return (
			<div>
				{ this.props.para.customer &&
					<Dialog open={this.props.isOpen}>
						<DialogContent>
							<DialogTitle>Edit Customer {this.props.para.customer.name}</DialogTitle>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Customer Name"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.customer.name}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Address"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.customer.adresse}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Department"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.customer.department}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => this.props.para.save()}>Save</Button>
							<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(CustomerDetail);