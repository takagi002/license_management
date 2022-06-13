package de.hse.swb.jaxrs.resources;

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
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import de.hse.swb.jaxrs.model.CustomerSchema;
import de.hse.swb.jaxrs.model.CustomerSimpleSchema;
import de.hse.swb.jpa.orm.dao.CustomerDao;
import de.hse.swb.jpa.orm.model.Customer;
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
	    public List<CustomerSimpleSchema> getCustomers() {
	    	List<CustomerSimpleSchema> customers = new ArrayList<>();
	    	List<Customer> dbCustomers = customerDao.getCustomers();
	    	
	    	dbCustomers.forEach(costumer -> customers.add(new CustomerSimpleSchema(costumer)));
	        return customers;
	    }
	    
	    @GET
	    @Path("{id}")
	    @Produces(MediaType.APPLICATION_JSON)
	    public CustomerSchema getCustomer(@PathParam("id") long id) {
	        return new CustomerSchema(customerDao.getCustomer(id));
	    }

	    /**
	     * Update an existing customer
	     * @param user
	     * @return the updated customer
	     */
	    @PUT
	    @Consumes(MediaType.APPLICATION_JSON)
	    @Produces(MediaType.APPLICATION_JSON)
	    public CustomerSchema saveUser(CustomerSchema customerSchema) {
	    	
	    	Customer customer = new Customer();
	    	customer.setId(customerSchema.getId());
	    	customer.setName(customerSchema.getName());
	    	customer.setAdresse(customerSchema.getAddress());
	    	customer.setAdresse2(customerSchema.getAddressOptional());
	    	customer.setDepartment(customerSchema.getDepartment());
	    	
	        return new CustomerSchema(customerDao.saveCustomer(customer));
	    } 
	    
	    /**
	     * Create a new customer
	     * @param user
	     * @return the new customer
	     */
	    @POST
	    @Consumes(MediaType.APPLICATION_JSON)
	    @Produces(MediaType.APPLICATION_JSON)
	    public CustomerSchema addCustomer(CustomerSchema customerSchema) {
	    	
	    	Customer customer = new Customer();
	    	customer.setId(0);
	    	customer.setName(customerSchema.getName());
	    	customer.setAdresse(customerSchema.getAddress());
	    	customer.setAdresse2(customerSchema.getAddressOptional());
	    	customer.setDepartment(customerSchema.getDepartment());
	    	
	    	return new CustomerSchema(customerDao.addCustomer(customer));
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
