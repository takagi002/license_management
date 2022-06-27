import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { getContract } from '../common/apiUtility';

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
			contract: null
		}
	}

	componentDidUpdate(oldProps){
        if(this.props.para.contractId !== oldProps.para.contractId){
            getContract(this.props.para.contractId, this.props.url, (json) => {this.setState({contract: json})});
        }
    }

	saveContract(){


		this.props.para.cancel()
	}

	render() {
		return (
			<div>
				{ this.state.contract &&
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
								defaultValue={this.state.contract.startDate}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="End Date"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.endDate}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Version"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.version}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Responsible 1"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.user1.name}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Responsible 2"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.user2.name}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="IP Number 1"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.ipV4Address1}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="IP Number 2"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.ipV4Address2}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="IP Number 3"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.ipV4Address3}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Feature A"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.feature1}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Feature B"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.feature2}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Feature C"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.feature3}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="License Key"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.licenseKey}
							/>
						</DialogContent>

						<DialogActions>
							<Button>Update Key</Button>
							<Button>Mail Key</Button>
							<Button onClick={() => this.saveContract()} >Save</Button>
							<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(ContractDetails);