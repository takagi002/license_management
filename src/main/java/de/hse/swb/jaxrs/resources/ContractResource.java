package de.hse.swb.jaxrs.resources;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import de.hse.swb.jaxrs.model.ContractSchema;
import de.hse.swb.jaxrs.model.ContractSimpleSchema;
import de.hse.swb.jpa.orm.dao.ContractDao;
import de.hse.swb.jpa.orm.dao.CustomerDao;
import de.hse.swb.jpa.orm.dao.UserDao;
import de.hse.swb.jpa.orm.model.Contract;
import de.hse.swb.jpa.orm.model.User;
import io.vertx.core.http.HttpServerRequest;

@RequestScoped
@Path("/contracts")
public class ContractResource {

	
    @Inject
    ContractDao contractDao;
    @Inject
    CustomerDao customerDao;
    @Inject
    UserDao userDao;
    
    @Context
    HttpServerRequest request;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<ContractSimpleSchema> getContracts(@QueryParam("customerId") Long customerId) {
    	List<ContractSimpleSchema> contracts = new ArrayList<>();
    	
    	List<Contract> dbContracts;
    	if (customerId == null) {
    		dbContracts = contractDao.getContracts();
    	} else {
    		dbContracts = customerDao.getCustomer(customerId).getContracts();
    	}
    	
    	dbContracts.forEach(contract -> contracts.add(new ContractSimpleSchema(contract)));
        return contracts;
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ContractSchema getContract(@PathParam("id") long id) {
        return new ContractSchema( contractDao.getContract(id));
    }

    /**
     * Update an existing Contract
     * @param Contract
     * @return the updated Contract
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ContractSchema saveContract(ContractSchema contract) {
    	Contract dbContract = contractDao.getContract(contract.getId());
    	if(dbContract == null) {
    		dbContract = new Contract();
    		dbContract.setId(0);
    	}
    	
    	dbContract.setStartDate(Date.valueOf(contract.getStartDate()));
    	dbContract.setEndDate(Date.valueOf(contract.getStartDate()));
    	dbContract.setLicenseKey(contract.getLicenseKey());
    	dbContract.setVersion(contract.getVersion());
    	dbContract.setFeature1(contract.getFeature1());
    	dbContract.setFeature2(contract.getFeature2());
    	dbContract.setFeature3(contract.getFeature3());
    	dbContract.setIpV4Adress1(contract.getIpv4address1());
    	dbContract.setIpV4Adress2(contract.getIpv4address2());
    	dbContract.setIpV4Adress3(contract.getIpv4address3());
    	dbContract.setCustomer(customerDao.getCustomer(contract.getCustomerId()));
    	dbContract.setUser1(userDao.getUser(contract.getUser1Id()));
    	
    	if(contract.getUser2Id() != 0) {
    		dbContract.setUser2(userDao.getUser(contract.getUser2Id()));
    	}
    		
        return new ContractSchema(contractDao.save(dbContract));
    } 
    
    /**
     * Create a new Contract
     * @param Contract
     * @return the new Contract
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ContractSchema addContract(ContractSchema contract) {
    	Contract dbContract = new Contract();
		dbContract.setId(0);
    	
		dbContract.setStartDate(Date.valueOf(contract.getStartDate()));
    	dbContract.setEndDate(Date.valueOf(contract.getStartDate()));
    	dbContract.setLicenseKey(contract.getLicenseKey());
    	dbContract.setVersion(contract.getVersion());
    	dbContract.setFeature1(contract.getFeature1());
    	dbContract.setFeature2(contract.getFeature2());
    	dbContract.setFeature3(contract.getFeature3());
    	dbContract.setIpV4Adress1(contract.getIpv4address1());
    	dbContract.setIpV4Adress2(contract.getIpv4address2());
    	dbContract.setIpV4Adress3(contract.getIpv4address3());
    	dbContract.setCustomer(customerDao.getCustomer(contract.getCustomerId()));
    	dbContract.setUser1(userDao.getUser(contract.getUser1Id()));
    	
    	if(contract.getUser2Id() != 0) {
    		dbContract.setUser2(userDao.getUser(contract.getUser2Id()));
    	}
    	
        return new ContractSchema(contractDao.save(dbContract));
    }
    
    
    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteContract(@PathParam("id") long id) {
    	Contract contract = contractDao.getContract(id);
    	contractDao.removeContract(contract);
    }
    
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public void removeAllContracts() {
    	contractDao.removeAllContracts();
    }
}
