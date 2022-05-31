
function resolveStatus( response ){
    if ( response.status >= 200 && response.status < 300 ) {
        return Promise.resolve( response );
    } else {
        return Promise.reject( new Error( response.statusText ) );
    }
}

function fetchCustomers(baseUrl, callback){
    fetch( baseUrl + "customers")
        .then( resolveStatus )
        .then( (response) => { return response.json() } )
        .then( callback )
        .catch( function( error ) {
            console.log( 'Request failed', error );
        });
}

function fetchUsers(baseUrl, callback){
    fetch(baseUrl + "users")
        .then( resolveStatus )
        .then( (response) => {return response.json() } )
        .then( callback )
        .catch( function( error ) {
            console.log( 'Request failed', error );
        });
}

function fetchContracts(baseUrl, callback){
    fetch(baseUrl + "contracts")
        .then( resolveStatus )
        .then( (response) => {return response.json() } )
        .then( callback )
        .catch( function( error ) {
            console.log( 'Request failed', error );
        });
}


export {resolveStatus, fetchCustomers, fetchUsers, fetchContracts};