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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import de.hse.swb.jaxrs.model.UserSchema;
import de.hse.swb.jaxrs.model.UserSimpelSchema;
import de.hse.swb.jpa.orm.dao.CustomerDao;
import de.hse.swb.jpa.orm.dao.UserDao;
import de.hse.swb.jpa.orm.model.User;
import io.vertx.core.http.HttpServerRequest;

@RequestScoped
@Path("/users")
public class UserResource {


    @Inject
    UserDao userdao;
    @Inject
    CustomerDao customerDao;
    
    @Context
    HttpServerRequest request;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserSimpelSchema> getUsers(@QueryParam("customerId") Long customerId) {
    	List<UserSimpelSchema> users = new ArrayList<>();
    	
    	List<User> dbUsers;
    	System.out.println(customerId);
    	if (customerId == null) {
    		dbUsers = userdao.getUsers();
    	} else {
    		dbUsers = customerDao.getCustomer(customerId).getUsers();
    	}
    	
    	
    	dbUsers.forEach(user -> users.add(new UserSimpelSchema(user)));
        return users;
    }
    
    @GET
    @Path("{id:\\d+}")
    @Produces(MediaType.APPLICATION_JSON)
    public UserSchema getUser(@PathParam("id") long id) {
    	UserSchema user = new UserSchema(userdao.getUser(id));
    	user.setPassword("forbidden");
        return user;
    }

    /**
     * Update an existing user
     * @param user
     * @return the updated user
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public UserSchema saveUser(UserSchema userSchema) {
    	User dbUser = userdao.getUser(userSchema.getId());
    	if(dbUser == null) {
    		dbUser = new User();
    		dbUser.setId(0);
    	}
    	dbUser.setName(userSchema.getName());
    	dbUser.setEmail(userSchema.getEmail());
    	dbUser.setPassword("tmp");
    	dbUser.setPhoneNumber1(userSchema.getPhoneNumber());
    	dbUser.setPhoneNumber2(userSchema.getPhoneNumberOptional());
    	dbUser.setAdmin(userSchema.isAdmin());
    	
    	
    	if(userSchema.getCustomerId() > 0) {
    		dbUser.setCustomer(customerDao.getCustomer(userSchema.getCustomerId()));
    	}
    	
    	UserSchema user = new UserSchema(userdao.saveUser(dbUser));
    	if(userSchema.getPassword() != "forbidden") {
    		userdao.changePassword(dbUser, userSchema.getPassword());
    	}
    	user.setPassword("forbidden");
    	return user;
    } 
    
    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public UserSchema addUser(UserSchema userSchema) {
    	User dbUser = new User();
    	dbUser.setId(0);
    	dbUser.setName(userSchema.getName());
    	dbUser.setFirstname(userSchema.getFirstname());
    	dbUser.setPassword("tmp");
    	dbUser.setEmail(userSchema.getEmail());
    	dbUser.setPhoneNumber1(userSchema.getPhoneNumber());
    	dbUser.setPhoneNumber2(userSchema.getPhoneNumberOptional());
    	dbUser.setAdmin(userSchema.isAdmin());
    	
    	if(userSchema.getCustomerId() > 0) {
    		dbUser.setCustomer(customerDao.getCustomer(userSchema.getCustomerId()));
    	}
    	
    	UserSchema user = new UserSchema(userdao.saveUser(dbUser));
    	userdao.changePassword(dbUser, userSchema.getPassword());
    	user.setPassword("forbidden");
        return user;
    }
    
    @DELETE
    @Path("{id:\\d+}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteUser(@PathParam("id") long id) {
    	User user = userdao.getUser(id);
    	userdao.removeUser(user);
    }
    
    
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public void removeAllUsers() {
    	userdao.removeAllUsers();
    }
    
    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public UserSchema login (UserSchema userSchema) {
        UserSchema user = new UserSchema(userdao.login(userSchema.getUsername(), userSchema.getPassword()));
    	user.setPassword("forbidden");
        return user;
    }
	
}
