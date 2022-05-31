import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ContractDetails from "./ContractDetails";
import {fetchCustomers, fetchContracts} from '../common/apiUtility';

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
						<span>{customer.name}</span>
						<div>{
							this.state.contracts.map((contract, index) => {
								if (customer.id === contract.customer.id)
								{return (
								<div class="contractGrid" key={index}>
									<div>{contract.startDate}</div>
									<div>{contract.endDate}</div>
									<div>{contract.endDate}</div>
									<button onClick={() => this.openEditor(contract)}>Edit</button>
									<button>Delete</button>
									<button>Details</button>
								</div>
							)}})}
						</div>
					</div>
				)})}
				<ContractDetails currentContract={this.selectedContract} isOpen={this.isEditing}></ContractDetails>
			</div>
		);
	}
}

export default withStyles(styles)(Contracts);