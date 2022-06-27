import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GavelIcon from '@mui/icons-material/Gavel';
import { Dialog, DialogContent, DialogTitle, Button} from "@mui/material";
import { getContractsByCustomerId } from '../common/apiUtility';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});


class ContractListView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
            contracts: []
		}
	}

    componentDidUpdate(oldProps){
        if(this.props.para.customerId !== oldProps.para.customerId){
            getContractsByCustomerId(this.props.url, this.props.para.customerId, (json) => {this.setState({contracts: json})});
        }
    }

    render(){
		return (
            <div>
            {this.props.para.customerId && 
            <Dialog open={this.props.isOpen}>
                <DialogContent>
                    <DialogTitle>Viewing Contracts for {this.props.para.customer}</DialogTitle>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                          <List>
                                {this.state.contracts.map((contract, index) => {
                                    return (
                                        <ListItem>
                                            <ListItemIcon>
                                                <GavelIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                ID {contract.id}: from {contract.startDate} to {contract.endDate}
                                            </ListItemText>
                                        </ListItem>
                                )})} 
                          </List>
                    </Box>
                    <Button onClick={() => this.props.para.cancel()}>Close</Button>
                </DialogContent>
            </Dialog>    
            
            }</div>
        );
	}
}

export default withStyles(styles)(ContractListView);