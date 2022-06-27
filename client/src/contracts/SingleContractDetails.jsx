import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ListItem, TextField } from "@material-ui/core";
import { getContract, putContract } from '../common/apiUtility';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});


class SingleContractDetails extends React.Component {
	
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

	render() {
		return (
			<div>
				{ this.state.contract &&
					<Dialog open={this.props.isOpen}>
                        <DialogContent>
                            <DialogTitle>Viewing Contract Details</DialogTitle>
                            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <List>
                                      <ListItem>
                                            <ListItemText>
                                                ID: {this.state.contract.id}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                Start Date: {this.state.contract.startDate}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                End Date: {this.state.contract.endDate}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                Version: {this.state.contract.version}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                IP 1: {this.state.contract.ipV4Address1}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                IP 2: {this.state.contract.ipV4Address2}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                IP 3: {this.state.contract.ipV4Address3}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                Feature A: {this.state.contract.feature1}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                Feature B: {this.state.contract.feature2}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                Feature C: {this.state.contract.feature3}
                                            </ListItemText>
                                      </ListItem>
                                      <ListItem>
                                            <ListItemText>
                                                License Key: {this.state.contract.licenseKey}
                                            </ListItemText>
                                      </ListItem>
                                </List>
                            </Box>
                        </DialogContent>
                        <Button onClick={() => this.props.para.cancel()}>Close</Button>
                    </Dialog>
				}
			</div>
		);
	}
}

export default withStyles(styles)(SingleContractDetails);