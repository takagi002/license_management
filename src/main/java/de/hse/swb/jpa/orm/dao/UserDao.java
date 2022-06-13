package de.hse.swb.jpa.orm.dao;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import de.hse.swb.jpa.orm.model.User;

@ApplicationScoped
public class UserDao {
	@Inject
	EntityManager em;
	
	public List<User> getUsers(){
		TypedQuery<User> query = em.createQuery("SELECT u FROM User u", User.class);
		List<User> results = query.getResultList();
		return results;
	}
	
	public User getUser(long id) {
		return em.find(User.class, id);
	}
	
	public User getUserByUsername(String username) {
		TypedQuery<User> query = em.createQuery("SELECT u FROM User u WHERE u.username = :name", User.class);
		query.setParameter("name", username);
		return query.getSingleResult();
	}
	
	@Transactional
    public User addUser(User user) {
		em.persist(user);
    	return user;
    }
	
	@Transactional
	public User updateUser(User user) {
		return em.merge(user);
	}
	
	@Transactional
	public User saveUser(User user) {
		if( user.getId() != 0) {
			return updateUser(user);
		} else {
			return addUser(user);
		}
	}
	
	@Transactional
	public User changePassword(User user, String newPassword) {
		user.setPassword(hashPassword(newPassword));
		return updateUser(user);
	}

    @Transactional
    public void removeUser(User user) {

		Query removeForeignKey = em.createQuery("UPDATE Contract SET user1_userId=null WHERE user1_userId=" + user.getId());
		removeForeignKey.executeUpdate();
		removeForeignKey = em.createQuery("UPDATE Contract SET user2_userId=null WHERE user2_userId=" + user.getId());
		removeForeignKey.executeUpdate();
		
    	em.remove(em.merge(user));
    }
    
    @Transactional
    public void removeAllUsers() {
    	try {

    		Query removeForeignKey = em.createQuery("UPDATE Contract SET user1_userId=null WHERE user1_userId >= 0");
    		removeForeignKey.executeUpdate();
    		removeForeignKey = em.createQuery("UPDATE Contract SET user2_userId=null WHERE user2_userId >= 0");
    		removeForeignKey.executeUpdate();
    		
    	    Query del = em.createQuery("DELETE FROM User WHERE id >= 0");
    	    del.executeUpdate();

    	} catch (SecurityException | IllegalStateException  e) {
    	    e.printStackTrace();
    	}

    	return;
    }
    
    public User login(String username, String password) {
    	User user = getUserByUsername(username);
    	
    	if(user.getPassword().equals(hashPassword(password))) {
    		return user;
    	}
    	return null;
    }
    
    private String hashPassword(String password) {
    	//TODO move to User model
    	String passwordDigest = null;
    	try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			
			byte[] md5 = md.digest(password.getBytes());
			
			//System.out.println(md5.toString());
			
			StringBuilder sb = new StringBuilder();
            for (byte b : md5) {
                sb.append(Integer.toString((b & 0xff) + 0x100, 16).substring(1));
            }
            passwordDigest = sb.toString();
           
			
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	 return passwordDigest;
    	
    }
}
