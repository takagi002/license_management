import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TextField , FormControlLabel, FormGroup} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
			customers: [],
			customerId: null
		}
	}


	handleChange = (event) => {
		this.setState({customerName: event.target.value})
	}

	//save() {
	//	putUser
	//}
	
	render() {
		return (
			<div>
				{ this.props.para.user &&
					<Dialog open={this.props.isOpen}>
						<DialogContent>
							<DialogTitle>Editing User {this.props.para.user.firstname}</DialogTitle>
							<FormControl fullWidth>
  								<InputLabel id="demo-simple-select-label">Customer</InputLabel>
  								<Select
								  onChange={this.handleChange}
  								  labelId="demo-simple-select-label"
  								  id="demo-simple-select"
  								  value={this.state.customerId}
								  label="Customer"
  								>
  								  <MenuItem value={null}>No Customer</MenuItem>
  								  {this.props.customers.map((customer, index) => {
									return (
										<MenuItem value={customer.id}>{customer.name}</MenuItem>
									)})}
  								</Select>
							</FormControl>
							<TextField
            					autoFocus
            					margin="dense"
            					id="firstname"
            					label="First Name"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.para.user.firstname}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Last Name"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.para.user.name}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Email"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.para.user.email}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Phone"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.para.user.phoneNumber1}
							/>
							<TextField
            					autoFocus
            					margin="dense"
            					id="name"
            					label="Mobile"
            					type="text"
            					fullWidth
            					variant="standard"
								defaultValue={this.props.para.user.phoneNumber2}
							/>
							<div>
								<FormGroup>
								        {(() => {
											if (this.props.para.user.admin) {
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
							<Button onClick={() => this.props.para.save()} >Save</Button>
							<Button onClick={() => this.props.para.cancel()}>Cancel</Button>
						</DialogActions>
					</Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(UserDetail);