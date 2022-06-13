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


class AddContractEditor extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

		}
	}


	render() {
		return (
			<div>
				<Dialog open={this.props.isOpen}>
					<DialogContent>
						<DialogTitle>New Contract</DialogTitle>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Start Date"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="End Date"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Version"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Responsible"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="IP Number 1"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="IP Number 2"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="IP Number 3"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Feature A"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Feature B"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Feature C"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="License Key"
							type="text"
							fullWidth
							variant="standard"
						/>
					</DialogContent>
					<DialogActions>
						<Button>Submit</Button>
						<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(AddContractEditor);