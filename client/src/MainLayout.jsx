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
import {getCustomers, getUsers} from './common/apiUtility';
import AddUserEditor from "./users/AddUserEditor";
import AddCustomerEditor from "./customers/AddCustomerEditor";
import AddContractEditor from "./contracts/AddContractEditor";

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
            filter:"",
            currentPage: <Users loggedInUser={this.props.loggedInUser} filter="" url={this.props.url}></Users>,
            currentPageName: "Users",
            editorParameters: {},
			isEditing: false,
            customers: [],
            users: [],
            addItemParameters: {},
            isAddingUser: false,
            isAddingCustomer: false,
            isAddingContract: false
		}
	}

    componentDidMount(){
        this.setState({currentPage: <Users loggedInUser={this.props.loggedInUser} filter={this.state.filter} url={this.props.url}></Users>});
		getCustomers(this.props.url, (json) => {this.setState({customers: json})});
        getUsers(this.props.url, (json) => {this.setState({users: json})});
	}

    switchPage = (component, name) => {
        this.setState({currentPage: component});
        this.setState({currentPageName: name});
    }

    openEditor(userId, customerId) {
		this.setState({isEditing: true});
		this.setState({editorParameters:{
			userId: userId,
            customerId: customerId,
			cancel: () => this.setState({isEditing: false, editorParameters:{userId: null}}),
		}});
	}

    onfilterChange = (event) => {
        this.setState({filter: event.target.value})
        this.setState({currentPage: React.cloneElement(
            this.state.currentPage,
            {filter: event.target.value}
          )});
    }

    addItem(){
        if(this.state.currentPageName === "Users"){
            this.setState({isAddingUser: true});
            this.setState({addItemParameters: {
                cancel: () => this.setState({isAddingUser: false})
            }});
        }else if(this.state.currentPageName === "Customers"){
            this.setState({isAddingCustomer: true});
            this.setState({addItemParameters: {
                cancel: () => this.setState({isAddingCustomer: false})
            }});
        }else if(this.state.currentPageName === "Contracts"){
            this.setState({isAddingContract: true});
            this.setState({addItemParameters: {
                cancel: () => this.setState({isAddingContract: false})
            }});
        }
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
                            <Button size="medium" endIcon={<AddIcon />} onClick={() => this.addItem()} disabled={(this.state.currentPageName === "Users" || this.state.currentPageName === "Customers") && !this.props.loggedInUser.admin} >Add</Button>
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
                                    defaultValue=""
                                    onChange={this.onfilterChange}
                                /> 
                                <Button onClick={
                                    () => this.openEditor(this.props.loggedInUser.id, this.props.loggedInUser.customerId ? this.props.loggedInUser.customerId : {name: "No Customer", id: null} )
                                    } startIcon={<AccountCircle />}>Account Settings</Button>
                                <Button startIcon={<LogoutIcon />} onClick={() => this.props.para.logout()}>Logout</Button>
                            </div>
                        </header>
                    </Grid>
                                
                    {/* left bar */}
                    <Grid item xs={2}>
                        <Grid contrainer direction="row" justifyContent="center" alignItems="center">
                            <NavBar switchPage={this.switchPage} loggedInUser={this.props.loggedInUser} filter={this.state.filter} url={this.props.url}></NavBar>
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
                <UserDetail url={this.props.url} customers={this.state.customers} para={this.state.editorParameters} isOpen={this.state.isEditing}></UserDetail>
                <AddUserEditor url={this.props.url} customers={this.state.customers} para={this.state.addItemParameters} isOpen={this.state.isAddingUser}></AddUserEditor>
                <AddCustomerEditor url={this.props.url} customers={this.state.customers} para={this.state.addItemParameters} isOpen={this.state.isAddingCustomer}></AddCustomerEditor>
                <AddContractEditor url={this.props.url} users={this.state.users} customers={this.state.customers} para={this.state.addItemParameters} isOpen={this.state.isAddingContract} ></AddContractEditor>
            </div>                      
        );
	}
}

export default withStyles(styles)(MainLayout);