import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TextField , FormControlLabel} from "@mui/material";
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

class AddUserEditor extends React.Component {
	
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

	render() {
		return (
			<div>
				<Dialog open={this.props.isOpen}>
					<DialogContent>
						<DialogTitle>New User</DialogTitle>
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
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Last Name"
            				type="text"
            				fullWidth
            				variant="standard"
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Email"
            				type="text"
            				fullWidth
            				variant="standard"
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Phone"
            				type="text"
            				fullWidth
            				variant="standard"
						/>
						<TextField
            				autoFocus
            				margin="dense"
            				id="name"
            				label="Mobile"
            				type="text"
            				fullWidth
            				variant="standard"
						/>
						<div>
                            <FormControlLabel control={<Checkbox/>} label="isAdministrator" />
						</div>
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

export default withStyles(styles)(AddUserEditor);