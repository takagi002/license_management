import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ContractDetails from "./ContractDetails";
import {getCustomers, getContracts, deleteContract} from '../common/apiUtility';
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
			editorParameters: {},
		}
	}

	openEditor = (contract, index) => {
		this.setState({isEditing: true});
		this.setState({editorParameters:{
			contract,
			index,
			cancel: () => this.setState({isEditing: false}),
			save: () => this.saveContract(),
		}});
	}
	
	saveContract(contract, index) {
		const temp = this.state.contracts.slice();
		temp[index] = contract;
		this.setState({contracts: temp});

		// close window
		this.setState({isEditing: false})
	}

	removeContract(contractId, index){
		deleteContract(contractId, this.props.url)

		const temp = this.state.contracts.slice();
		temp.splice(index,1);

		this.setState({contracts: temp});
	}

	componentDidMount(){
		getCustomers(this.props.url, (json) => {this.setState({customers: json})});
		getContracts(this.props.url, (json) => {this.setState({contracts: json})} );
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
									<Button startIcon={<EditIcon />} onClick={() => this.openEditor(contract, index)}>Edit</Button>
									<Button startIcon={<DeleteIcon />} onClick={() => this.removeContract(contract.id, index)}>Delete</Button>
									<Button startIcon={<InfoIcon />} >Details</Button>
									<div class='row-border'></div>
								</div>
							)}})}
						</div>
						<div class='row-border'></div>
					</div>
				)})}
				<ContractDetails para={this.state.editorParameters} isOpen={this.state.isEditing}></ContractDetails>
			</div>
		);
	}
}

export default withStyles(styles)(Contracts);