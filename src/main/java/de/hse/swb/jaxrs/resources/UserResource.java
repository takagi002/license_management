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

import de.hse.swb.jpa.orm.dao.UserDao;
import de.hse.swb.jpa.orm.model.User;
import io.vertx.core.http.HttpServerRequest;

@RequestScoped
@Path("/users")
public class UserResource {


    @Inject
    UserDao userdao;
    
    @Context
    HttpServerRequest request;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
        return userdao.getUsers();
    }
    
    @GET
    @Path("id")
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser(Long id) {
        return userdao.getUser(id);
    }

    /**
     * Update an existing user
     * @param user
     * @return the updated user
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User saveUser(User user) {
        return userdao.save(user);
    } 
    
    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User addUser(User user) {
        return userdao.add(user);
    }
    
    @DELETE
    @Path("id")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteUser(Long id) {
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
    public User login (User user) {
        return userdao.login(user.getUsername(), user.getPassword());
    }
	
}
