import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@mui/material/Grid";
import NavBar from "./NavBar/NavBar";


const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

class MainLayout extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	
	render() {
        return (
            <Grid container spacing={0}>
                // top bar
                <Grid item>
                    <header></header>
                </Grid>
                
                // left bar
                <Grid item>
                    <NavBar></NavBar>
                </Grid>

                // main component 
                <Grid item>
                    <main></main>
                </Grid>
            </Grid>
        );
	}
}

export default withStyles(styles)(MainLayout);