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
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import de.hse.swb.jpa.orm.dao.CustomerDao;
import de.hse.swb.jpa.orm.model.Customer;
import de.hse.swb.jpa.orm.model.User;
import io.vertx.core.http.HttpServerRequest;


@RequestScoped
@Path("/customers")
public class CustomerResource {

	
	 @Inject
	    CustomerDao customerDao;
	    
	    @Context
	    HttpServerRequest request;

	    @GET
	    @Produces(MediaType.APPLICATION_JSON)
	    public List<Customer> getCustomers() {
	        return customerDao.getCustomers();
	    }
	    
	    @GET
	    @Path("{id}")
	    @Produces(MediaType.APPLICATION_JSON)
	    public Customer getCustomer(@PathParam("id") long id) {
	        return customerDao.getCustomer(id);
	    }

	    /**
	     * Update an existing customer
	     * @param user
	     * @return the updated customer
	     */
	    @PUT
	    @Consumes(MediaType.APPLICATION_JSON)
	    @Produces(MediaType.APPLICATION_JSON)
	    public Customer saveUser(Customer customer) {
	        return customerDao.updateCustomer(customer);
	    } 
	    
	    /**
	     * Create a new customer
	     * @param user
	     * @return the new customer
	     */
	    @POST
	    @Consumes(MediaType.APPLICATION_JSON)
	    @Produces(MediaType.APPLICATION_JSON)
	    public Customer addCustomer(Customer customer) {
	        return customerDao.addCustomer(customer);
	    }
	    
	    @DELETE
	    @Path("{id}")
	    @Produces(MediaType.APPLICATION_JSON)
	    public void deleteCustomer(@PathParam("id") long id) {
	    	Customer customer = customerDao.getCustomer(id);
	    	customerDao.removeCustomer(customer);
	    }
	    
	    @DELETE
	    @Produces(MediaType.APPLICATION_JSON)
	    public void removeAllCustomers() {
	    	customerDao.removeAllCustomers();
	    }
}
