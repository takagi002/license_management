package de.hse.swb.jpa.orm.dao;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import de.hse.swb.jpa.orm.model.User;

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
	
	@Transactional
    public User save(User user) {
    	if (user.getId() != null) {
    		user = em.merge(user);
    	} else {
        	em.persist(user);
    	}
    	return user;
    }

    @Transactional
    public void removeUser(User user) {
    	em.remove(user);
    }
    
    @Transactional
    public void removeAllUsers() {
    	try {

    	    Query del = em.createQuery("DELETE FROM user WHERE id >= 0");
    	    del.executeUpdate();

    	} catch (SecurityException | IllegalStateException  e) {
    	    e.printStackTrace();
    	}

    	return;
    }
}
