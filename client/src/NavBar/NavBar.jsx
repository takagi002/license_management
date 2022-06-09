import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemButton, ListItemText, Paper} from "@mui/material";
import { Divider } from "@material-ui/core";
import Contracts from "../contracts/Contracts";
import Users from "../users/Users"
import Customers from "../customers/Customers";


const styles = theme => ({
	button_text: {
		textAlign: 'center',
	}
});

class NavBar extends React.Component {
    constructor(props) {
		super(props);
	    this.state = {
			
		};
	}

	render() {
    	return(
			<Paper elevation={4}>
				<List>

          			<ListItem>
            			<ListItemButton onClick={() => (this.props.switchPage(<Customers url={this.props.url}/>, "Customers"))}>
              				<ListItemText primary="Customers" />
            			</ListItemButton>
          			</ListItem>
					<Divider />
					<ListItem>
            			<ListItemButton onClick={() => (this.props.switchPage(<Contracts url={this.props.url}/>, "Contracts"))}>
              				<ListItemText primary="Contracts" />
            			</ListItemButton>
          			</ListItem>
					<Divider />
          			<ListItem>
            			<ListItemButton onClick={() => (this.props.switchPage(<Users url={this.props.url}/>, "Users"))}>
              				<ListItemText primary="Users" />
            			</ListItemButton>
          			</ListItem>
        		</List>
			</Paper>
		);
	}
}

export default withStyles(styles)(NavBar);