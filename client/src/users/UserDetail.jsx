import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl ="http://localhost:8080/";
let currentUser;

class UserDetail extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	
	status( response ) {
        if ( response.status >= 200 && response.status < 300 ) {
            return Promise.resolve( response )
        } else {
            return Promise.reject( new Error( response.statusText ) )
        }
    }
	
	render() {
		return (
			<Dialog>
				<DialogContent>
					<DialogTitle>Editing User {currentUser}</DialogTitle>
					<TextField
            			autoFocus
            			margin="dense"
            			id="name"
            			label="Customer"
            			type="text"
            			fullWidth
            			variant="standard"
						defaultValue={currentUser.customer.name}
					/>
					<TextField
            			autoFocus
            			margin="dense"
            			id="name"
            			label="First Name"
            			type="text"
            			fullWidth
            			variant="standard"
						defaultValue={currentUser.firstname}
					/>
					<TextField
            			autoFocus
            			margin="dense"
            			id="name"
            			label="Last Name"
            			type="text"
            			fullWidth
            			variant="standard"
						defaultValue={currentUser.name}
					/>
					<TextField
            			autoFocus
            			margin="dense"
            			id="name"
            			label="Email"
            			type="text"
            			fullWidth
            			variant="standard"
						defaultValue={currentUser.email}
					/>
					<TextField
            			autoFocus
            			margin="dense"
            			id="name"
            			label="Phone"
            			type="text"
            			fullWidth
            			variant="standard"
						defaultValue={currentUser.phoneNumber1}
					/>
					<TextField
            			autoFocus
            			margin="dense"
            			id="name"
            			label="Mobile"
            			type="text"
            			fullWidth
            			variant="standard"
						defaultValue={currentUser.phoneNumber2}
					/>
					<div>
						<input type='checkbox' id='adminBox'>isAdministrator</input>
					</div>
				</DialogContent>

				<DialogActions>
					<Button>Save</Button>
					<Button>Cancel</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default withStyles(styles)(UserDetail);