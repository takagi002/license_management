package de.hse.swb.jpa.orm.dao;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import de.hse.swb.jpa.orm.model.Customer;

public class CustomerDao {
	@Inject
	EntityManager em;
	
	public List<Customer> getCustomers(){
		TypedQuery<Customer> query = em.createQuery("SELECT c FROM Customer c", Customer.class);
		List<Customer> results = query.getResultList();
		return results;
	}
	
	public Customer getCustomer(long id) {
		return em.find(Customer.class, id);
	}
}
