import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ContractDetails from "./ContractDetails";
import {fetchCustomers, fetchContracts} from '../common/apiUtility';
import { Button, Typography} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

class Contracts extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			contracts: [],
			isEditing: false,
			selectedContract: null,
		}
	}
	

	openEditor = (contract) => {
		this.setState({isEditing: true});
		this.setState({selectedContract: contract});
	}

	componentDidMount(){
		fetchCustomers(this.props.url, (json) => {this.setState({customers: json})});
		fetchContracts(this.props.url, (json) => {this.setState({contracts: json})} );
	}

	render() {
		return (
			<div>{
				this.state.customers.map((customer, index) => {
					return (
					<div class="customerGrid" key={index}>
						<Typography variant="body1" gutterBottom>{customer.name}</Typography>
						<div>{
							this.state.contracts.map((contract, index) => {
								if (customer.id === contract.customer.id)
								{return (
								<div class="contractGrid" key={index}>
									<Typography variant="body1" gutterBottom>{contract.startDate}</Typography>
									<Typography variant="body1" gutterBottom>{contract.endDate}</Typography>
									<Typography variant="body1" gutterBottom>{contract.endDate}</Typography>
									<Button startIcon={<EditIcon />} onClick={() => this.openEditor(contract)}>Edit</Button>
									<Button startIcon={<DeleteIcon />} >Delete</Button>
									<Button startIcon={<InfoIcon />} >Details</Button>
									<div class='row-border'></div>
								</div>
							)}})}
						</div>
						<div class='row-border'></div>
					</div>
				)})}
				<ContractDetails currentContract={this.selectedContract} isOpen={this.isEditing}></ContractDetails>
			</div>
		);
	}
}

export default withStyles(styles)(Contracts);