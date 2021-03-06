import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { putContract } from "../common/apiUtility";
import { getNativeSelectUtilityClasses } from "@mui/material";

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
			customers: [],
			users: [],
			validUsers: [],
			customerId: null,
			startDate: "",
			endDate: "",
			version: "",
			responsible1: 0,
			responsible2: 0,
			ip1: "",
			ip2: "",
			ip3: "",
			featureA: "",
			featureB: "",
			featureC: "",
			licenseKey: ""
		}
	}

	handleCustomerChange = (event) => {
		this.setState({customerId: event.target.value})

		let validUsersFromCustomer = []
		this.props.users.forEach( (user) =>
			{if (user.customerId){
				if (user.customerId === event.target.value){
					validUsersFromCustomer.push(user)
				}
			}
		}) 
		this.setState({validUsers: validUsersFromCustomer})
	}

	handleUserOneChange = (event) => {
		this.setState({responsible1: event.target.value})
	}
	handleUserTwoChange = (event) => {
		this.setState({responsible2: event.target.value})
	}
	handleStartDateChange = (event) => {
		this.setState({startDate: event.target.value})
	}
	handleEndDateChange = (event) => {
		this.setState({endDate: event.target.value})
	}
	handleVersionChange = (event) => {
		this.setState({version: event.target.value})
	}
	handleIpOneChange = (event) => {
		this.setState({ip1: event.target.value})
	}
	handleIpTwoChange = (event) => {
		this.setState({ip2: event.target.value})
	}
	handleIpThreeChange = (event) => {
		this.setState({ip3: event.target.value})
	}
	handleFeatureAChange = (event) => {
		this.setState({featureA: event.target.value})
	}
	handleFeatureBChange = (event) => {
		this.setState({featureB: event.target.value})
	}
	handleFeatureCChange = (event) => {
		this.setState({featureC: event.target.value})
	}
	handleLicenseChange = (event) =>{
		this.setState({licenseKey: event.target.value})
	}

	addContract(contractData){
		putContract(contractData, this.props.url)
		this.props.para.cancel()
	}


	render() {
		return (
			<div>
				<Dialog open={this.props.isOpen}>
					<DialogContent>
						<DialogTitle>New Contract</DialogTitle>
						<FormControl fullWidth>
  							<InputLabel id="demo-simple-select-label">Customer</InputLabel>
  							<Select
							  onChange={this.handleCustomerChange}
  							  labelId="demo-simple-select-label"
  							  id="customer"
  							  value={this.state.customerId}
							  label="Customer"
  							>
								<MenuItem value={0}>No Customer</MenuItem>
  							  {this.props.customers.map((customer, index) => {
								return (
									<MenuItem value={customer.id}>{customer.name}</MenuItem>
								)})}
  							</Select>
						</FormControl>
						<FormControl fullWidth>
  							<InputLabel id="demo-simple-select-label">User 1</InputLabel>
  							<Select
							  onChange={this.handleUserOneChange}
  							  labelId="demo-simple-select-label"
  							  id="responsible-user-1"
  							  value={this.state.responsible1}
							  label="User 1"
  							>
								<MenuItem value={0}>No User</MenuItem>
  							   {this.state.validUsers.map((user, index) => {
								return (
									user.id !== this.state.responsible2 &&
										<MenuItem value={user.id}>{user.firstname} {user.name}</MenuItem>
								)})}
  							</Select>
						</FormControl>
						<FormControl fullWidth>
  							<InputLabel id="demo-simple-select-label">User 2</InputLabel>
  							<Select
							  onChange={this.handleUserTwoChange}
  							  labelId="demo-simple-select-label"
  							  id="responsible-user-2"
  							  value={this.state.responsible2}
							  label="User 2"
  							>
								<MenuItem value={0}>No User</MenuItem>
								{this.state.validUsers.map((user, index) => {
								return (
									user.id !== this.state.responsible1 &&
										<MenuItem value={user.id}>{user.firstname} {user.name}</MenuItem>
								)})}
  							</Select>
						</FormControl>
						<TextField
							autoFocus
							margin="dense"
							id="start-date"
							label="Start Date"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleStartDateChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="end-date"
							label="End Date"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleEndDateChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="version"
							label="Version"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleVersionChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="ip-1"
							label="IP Number 1"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleIpOneChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="ip-2"
							label="IP Number 2"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleIpTwoChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="ip-3"
							label="IP Number 3"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleIpThreeChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="feature-a"
							label="Feature A"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleFeatureAChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="feature-b"
							label="Feature B"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleFeatureBChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="feature-c"
							label="Feature C"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleFeatureCChange}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="license-key"
							label="License Key"
							type="text"
							fullWidth
							variant="standard"
							onChange={this.handleLicenseChange}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.addContract({
							id: 0,
							customerId: this.state.customerId,
							customerName: null,
							startDate: this.state.startDate,
							endDate: this.state.endDate,
							version: this.state.version,
							user1Id: this.state.responsible1,
							user2Id: this.state.responsible2,
							ipV4Address1: this.state.ip1,
							ipV4Address2: this.state.ip2,
							ipV4Address3: this.state.ip3,
							feature1: this.state.featureA,
							feature2: this.state.featureB,
							feature3: this.state.featureC,
							licenseKey: this.state.licenseKey
						})}>Submit</Button>
						<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(AddContractEditor);