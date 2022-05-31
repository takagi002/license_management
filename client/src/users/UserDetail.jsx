import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TextField , FormControlLabel, FormGroup} from "@material-ui/core";

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

		}
	}
	
	render() {
		return (
			<div>
				{ this.props.currentUser &&
					<Dialog open={this.props.isOpen}>
						<DialogContent>
							<DialogTitle>Editing User {this.props.currentUser.firstname}</DialogTitle>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Customer"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.currentUser.customer.name}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="First Name"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.currentUser.firstname}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Last Name"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.currentUser.name}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Email"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.currentUser.email}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Phone"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.currentUser.phoneNumber1}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Mobile"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.currentUser.phoneNumber2}
							/>
							<div>
								<FormGroup>
								        {(() => {
											if (this.props.currentUser.admin) {
											  return (
												<FormControlLabel control={<Checkbox defaultChecked/>} label="isAdministrator" />
											  )
											} else {
											  return (
												<FormControlLabel control={<Checkbox/>} label="isAdministrator" />
											  )
											}
										})()}
								</FormGroup>
							</div>
						</DialogContent>

						<DialogActions>
							<Button>Save</Button>
							<Button>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(UserDetail);