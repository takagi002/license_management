import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Dialog, DialogContent, DialogTitle, Button} from "@mui/material";
import { getUsersByCustomerId } from '../common/apiUtility';

const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});


class UserListView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
            users: []
		}
	}

    componentDidUpdate(oldProps){
        if(this.props.para.customerId !== oldProps.para.customerId){
            getUsersByCustomerId(this.props.url, this.props.para.customerId, (json) => {this.setState({users: json})});
        }
    }

    render(){
		return (
            <div>
            {this.props.para.customerId && 
            <Dialog open={this.props.isOpen}>
                <DialogContent>
                    <DialogTitle>Viewing Users for {this.props.para.customer}</DialogTitle>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                          <List>
                                {this.state.users.map((user, index) => {
                                    return (
                                        <ListItem>
                                            <ListItemIcon>
                                                <PersonOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                {user.firstname} {user.name}  
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

export default withStyles(styles)(UserListView);