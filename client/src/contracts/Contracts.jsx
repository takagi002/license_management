import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ContractDetails from "./ContractDetails";
import {getCustomers, getContracts, deleteContract} from '../common/apiUtility';
import { Paper, Button, Typography, Grid} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import SingleContractDetails from "./SingleContractDetails";

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: '12px',
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

class Contracts extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			contracts: [],
			isEditing: false,
			isViewingDetails: false,
			editorParameters: {},
		}
	}

	openEditor = (contractId, index) => {
		this.setState({isEditing: true});
		this.setState({editorParameters:{
			contractId: contractId,
			index: index,
			cancel: () => this.setState({isEditing: false}),
		}});
	}

	removeContract(contractId, index){
		deleteContract(contractId, this.props.url)

		const temp = this.state.contracts.slice();
		temp.splice(index,1);

		this.setState({contracts: temp});
	}

	openContractDetails(contractId, index){
		this.setState({isViewingDetails: true})
		this.setState({editorParameters:{
			contractId: contractId,
			index: index,
			cancel: () => this.setState({isViewingDetails: false}),
		}});
	}

	componentDidMount(){
		getCustomers(this.props.url, (json) => {this.setState({customers: json})});
		getContracts(this.props.url, (json) => {this.setState({contracts: json})} );
	}

	render() {
		return (
			<div>
				<Stack spacing={2} divider={<Divider orientation="horizontal" />}>
				{this.state.customers.map((customer, index) => {
				return (
						<Item elevation={0}>
							<Grid container spacing={1} justifyContent="center" alignItems="center">
								<Grid item xs={2}><Typography variant="body1" gutterBottom>{customer.name}</Typography></Grid>
								<Grid item xs={10}>{this.state.contracts.map((contract, index) => {
									if (customer.id === contract.customerId && ( contract.customerName.includes(this.props.filter) || this.props.filter === ""))
									{return (
									<div>
										<Grid container spacing={1} justifyContent="center" alignItems="center">
										<Grid item xs={2}><Typography variant="body1" gutterBottom>{contract.startDate}</Typography></Grid>
										<Grid item xs={2}><Typography variant="body1" gutterBottom>{contract.endDate}</Typography></Grid>
										<Grid item xs={2}><Button startIcon={<EditIcon />} onClick={() => this.openEditor(contract.id, index)}>Edit</Button></Grid>
										<Grid item xs={3}><Button startIcon={<DeleteIcon />} onClick={() => this.removeContract(contract.id, index)}>Delete</Button></Grid>
										<Grid item xs={3}><Button startIcon={<InfoIcon />} onClick={() => this.openContractDetails(contract.id, index)}>Details</Button></Grid>
										</Grid>
									</div>
								)}})}
								</Grid>
							</Grid>
						</Item>
				)})}
				</Stack>
				<ContractDetails url={this.props.url} para={this.state.editorParameters} isOpen={this.state.isEditing}></ContractDetails>
				<SingleContractDetails url={this.props.url} para={this.state.editorParameters} isOpen={this.state.isViewingDetails}></SingleContractDetails>
			</div>
		);
	}
}

export default withStyles(styles)(Contracts);