package de.hse.swb.jpa.orm.dao;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

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

}
