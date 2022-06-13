
function resolveStatus( response ){
    if ( response.status >= 200 && response.status < 300 ) {
        return Promise.resolve( response );
    } else {
        return Promise.reject( new Error( response.statusText ) );
    }
}

function getCustomers(baseUrl, callback){
    fetch( baseUrl + "customers")
        .then( resolveStatus )
        .then( (response) => { return response.json() } )
        .then( callback )
        .catch( function( error ) {
            console.log( 'Request failed', error );
        });
}

function getUsers(baseUrl, callback){
    fetch(baseUrl + "users")
        .then( resolveStatus )
        .then( (response) => {return response.json() } )
        .then( callback )
        .catch( function( error ) {
            console.log( 'Request failed', error );
        });
}

function getContracts(baseUrl, callback){
    fetch(baseUrl + "contracts")
        .then( resolveStatus )
        .then( (response) => {return response.json() } )
        .then( callback )
        .catch( function( error ) {
            console.log( 'Request failed', error );
        });
}

function putUser(userData, baseUrl, callback){
    var formdata = JSON.stringify(userData);
    fetch(baseUrl + "users/"+ userData.id, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'put',
        body: formdata
    })

}

function putContract(contractData, baseUrl, callback){
    var formdata = JSON.stringify(contractData);
    fetch(baseUrl + "contracts/"+ contractData, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'put',
        body: formdata
    })
}

function putCustomer(customerData, baseUrl, callback){
    var formdata = JSON.stringify(customerData);
    fetch(baseUrl + "customers/"+ customerData, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'put',
        body: formdata
    })
}

function deleteUser(userData, baseUrl, callback){
    fetch(baseUrl + "users/" + userData, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'delete',
        body: formdata
    })

}


export {resolveStatus, getCustomers, getUsers, getContracts, putUser, putContract, putCustomer, deleteUser};