import React from "react";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
		center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl ="http://localhost:8080/";

class CustomerDetail extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	
	status( response ) {
        if ( response.status >= 200 && response.status < 300 ) {
            return Promise.resolve( response )
        } else {
            return Promise.reject( new Error( response.statusText ) )
        }
    }
	
	render() {
		return (
			<div>
				<div>
					<span>Customer Name</span>
					<input type="text"></input>
				</div>
			
				<div>
					<span>Address</span>
					<input type="text"></input>
				</div>
				
				<div>
					<span>Department</span>
					<input type="text"></input>
				</div>
				<button>Save</button>
				<button>Cancel</button>
			</div>
		);
	}
}

export default withStyles(styles)(CustomerDetail);