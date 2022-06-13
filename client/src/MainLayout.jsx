import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@mui/material/Grid";
import NavBar from "./NavBar/NavBar";
import Users from "./users/Users";
import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import { css, jsx } from '@emotion/react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import UserDetail from "./users/UserDetail";
import {getCustomers} from './common/apiUtility';

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
            currentPage: <Users url={this.props.url}></Users>,
            currentPageName: "Users",
            editorParameters: {},
			isEditing: false,
            customers: []
		}
	}

    componentDidMount(){
		getCustomers(this.props.url, (json) => {this.setState({customers: json})});
	}

    switchPage = (component, name) => {
        this.setState({currentPage: component});
        this.setState({currentPageName: name});
    }

    openEditor(user, customer) {
		this.setState({isEditing: true});
		this.setState({editorParameters:{
			user,
            customer,
			cancel: () => this.setState({isEditing: false}),
			save: () => this.saveUser(),
		}});
	}

	
	render() {
        return (
            <div>
                <Grid container  spacing={2} columns={12}>
                    {/* top bar */}
                    <Grid item xs={12}>
                        <header style={{display: "flex"}}>
                            <Box pl={'10px'} pt={'10px'} pb={'10px'} pr={'20px'}>
                                <Typography variant="h4" display="inline" >{this.state.currentPageName}</Typography>
                            </Box>
                            <Button size="medium" endIcon={<AddIcon />}>Add</Button>
                            <div style={{marginLeft: "auto"}}>
                                <TextField
                                    id="input-with-icon-textfield"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                        ),
                                    }}
                                    variant="standard"
                                /> 
                                <Button onClick={
                                    () => this.openEditor(this.props.loggedInUser, this.props.loggedInUser.customer ? this.props.loggedInUser.customer : {name: "No Customer", id: null} )
                                    } startIcon={<AccountCircle />}>Account Settings</Button>
                                <Button startIcon={<LogoutIcon />}>Logout</Button>
                            </div>
                        </header>
                    </Grid>
                                
                    {/* left bar */}
                    <Grid item xs={2}>
                        <Grid contrainer direction="row" justifyContent="center" alignItems="center">
                            <NavBar switchPage={this.switchPage} url={this.props.url}></NavBar>
                        </Grid>
                    </Grid>

                    {/* main component */}
                    <Grid item xs={10}>
                        <main>
                            <Paper elevation={4} >
                                <Box p={'24px'}>
                                    {this.state.currentPage}    
                                </Box> 
                            </Paper>
                                
                        </main>
                    </Grid>
                </Grid>
                <UserDetail customers={this.state.customers} para={this.state.editorParameters} isOpen={this.state.isEditing}></UserDetail>
            </div>
        );
	}
}

export default withStyles(styles)(MainLayout);