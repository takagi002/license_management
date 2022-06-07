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


class ContractDetails extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

		}
	}


	render() {
		return (
			<div>
				{ this.props.para.contract &&
					<Dialog open={this.props.isOpen}>
						<DialogContent>
							<DialogTitle>Editing Contract</DialogTitle>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Start Date"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.startdate}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="End Date"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.enddate}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Version"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.version}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Responsible"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.user1.name + ", " + this.propspara.contract.user2.name}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="IP Number 1"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.ipV4Adress1}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="IP Number 2"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.ipV4Adress2}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="IP Number 3"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.ipV4Adress3}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Feature A"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.feature1}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Feature B"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.propspara.contract.feature2}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Feature C"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.feature3}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="License Key"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.props.para.contract.licenseKey}
							/>
						</DialogContent>

						<DialogActions>
							<Button>Update Key</Button>
							<Button>Mail Key</Button>
							<Button onClick={() => this.props.para.save()} >Save</Button>
							<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(ContractDetails);