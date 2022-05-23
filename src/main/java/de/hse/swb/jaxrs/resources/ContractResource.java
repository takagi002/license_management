package de.hse.swb.jaxrs.resources;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import de.hse.swb.jpa.orm.dao.ContractDao;
import de.hse.swb.jpa.orm.model.Contract;
import de.hse.swb.jpa.orm.model.User;
import io.vertx.core.http.HttpServerRequest;

@RequestScoped
@Path("/contracts")
public class ContractResource {

	
    @Inject
    ContractDao contractDao;
    
    @Context
    HttpServerRequest request;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Contract> getContracts() {
        return contractDao.getContracts();
    }
    
    @GET
    @Path("id")
    @Produces(MediaType.APPLICATION_JSON)
    public Contract getContract(Long id) {
        return contractDao.getContract(id);
    }

    /**
     * Update an existing Contract
     * @param Contract
     * @return the updated Contract
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Contract saveContract(Contract Contract) {
        return contractDao.save(Contract);
    } 
    
    /**
     * Create a new Contract
     * @param Contract
     * @return the new Contract
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Contract addContract(Contract Contract) {
        return contractDao.save(Contract);
    }
    
    
    @DELETE
    @Path("id")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteContract(Long id) {
    	Contract contract = contractDao.getContract(id);
    	contractDao.removeContract(contract);
    }
    
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public void removeAllContracts() {
    	contractDao.removeAllContracts();
    }
}
