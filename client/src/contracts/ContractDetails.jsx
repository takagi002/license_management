import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { getContract, putContract } from '../common/apiUtility';

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
			contract: null,
			startDate: "",
			endDate: "",
			user1: "",
			user2: "",
			version: "",
			ip1: "",
			ip2: "",
			ip3: "",
			feature1: "",
			feature2: "",
			feature3: "",
			license: "",
		}
	}

	componentDidUpdate(oldProps){
        if(this.props.para.contractId !== oldProps.para.contractId){
            getContract(this.props.para.contractId, this.props.url, (json) => {this.setState({contract: json,
				startDate: json.startDate,
				endDate: json.endDate,
				customerId: json.customerId,
				user1: json.user1Id,
				user2: json.user2Id,
				version: json.version,
				ip1: json.ipV4Address1,
				ip2: json.ipV4Address2,
				ip3: json.ipV4Address3,
				feature1: json.feature1,
				feature2: json.feature2,
				feature3: json.feature3,
				license: json.licenseKey,
			})});
        }
    }

	handleStartDateChange = (event) => {
		this.setState({startDate: event.target.value})
	}
	handleEndDateChange = (event) => {
		this.setState({endDate: event.target.value})
	}
	handleUser1Change = (event) => {
		this.setState({user1: event.target.value})
	}
	handleUser2Change = (event) => {
		this.setState({user2: event.target.value})
	}
	handleVersionChange = (event) => {
		this.setState({version: event.target.value})
	}
	handleIP1Change = (event) => {
		this.setState({ip1: event.target.value})
	}
	handleIP2Change = (event) => {
		this.setState({ip2: event.target.value})
	}
	handleIP3Change = (event) => {
		this.setState({ip3: event.target.value})
	}
	handleFeature1Change = (event) => {
		this.setState({feature1: event.target.value})
	}
	handleFeature2Change = (event) => {
		this.setState({feature2: event.target.value})
	}
	handleFeature3Change = (event) => {
		this.setState({feature3: event.target.value})
	}
	handleLicenseChange = (event) => {
		this.setState({license: event.target.value})
	}

	saveContract(contractData){
		putContract(contractData, this.props.url)
		this.props.para.cancel()
	}

	
	generateLicenseKey() {
		const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    	let result = ' ';
    	for ( let i = 0; i < 33; i++ ) {
        	result += characters.charAt(Math.floor(Math.random() * 62));
    	}
		this.setState({license: result})
		document.getElementById("license").value = result;
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
								id="startdate"
								label="Start Date"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.startDate}
								onChange={this.handleStartDateChange}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="enddate"
								label="End Date"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.endDate}
								onChange={this.handleEndDateChange}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="version"
								label="Version"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.version}
								onChange={this.handleVersionChange}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="user1"
								label="Responsible 1"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.user1Id}
								onChange={this.handleUser1Change}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="user2"
								label="Responsible 2"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.user2Id}
								onChange={this.handleUser2Change}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="ip1"
								label="IP Number 1"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.ipV4Address1}
								onChange={this.handleIP1Change}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="ip2"
								label="IP Number 2"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.ipV4Address2}
								onChange={this.handleIP2Change}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="ip3"
								label="IP Number 3"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.ipV4Address3}
								onChange={this.handleIP3Change}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="featurea"
								label="Feature A"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.feature1}
								onChange={this.handleFeature1Change}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="featureb"
								label="Feature B"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.feature2}
								onChange={this.handleFeature2Change}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="featurec"
								label="Feature C"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.feature3}
								onChange={this.handleFeature3Change}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="license"
								label="License Key"
								type="text"
								fullWidth
								variant="standard"
								defaultValue={this.state.contract.licenseKey}
								onChange={this.handleLicenseChange}
								disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}
							/>
						</DialogContent>

						<DialogActions>
							<Button onClick={() => this.generateLicenseKey()} disabled={this.props.para.isExpired && !this.props.loggedInUser.admin}>Update Key</Button>
							<Button disabled={true}>Mail Key</Button>
							<Button onClick={() => { this.saveContract({
								id: this.state.contract.id,
								customerId: this.state.customerId,
								customerName: null,
								startDate: this.state.startDate,
								endDate: this.state.endDate,
								version: this.state.version,
								user1Id: this.state.user1,
								user2Id: this.state.user2,
								ipV4Address1: this.state.ip1,
								ipV4Address2: this.state.ip2,
								ipV4Address3: this.state.ip3,
								feature1: this.state.feature1,
								feature2: this.state.feature2,
								feature3: this.state.feature3,
								licenseKey: this.state.license
							})}} >Save</Button>
							<Button onClick={() => {this.props.para.cancel(); this.setState({contract: null})}}>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(ContractDetails);