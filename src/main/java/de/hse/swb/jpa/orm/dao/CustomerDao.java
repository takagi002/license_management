package de.hse.swb.jpa.orm.dao;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import de.hse.swb.jpa.orm.model.Customer;

@ApplicationScoped
public class CustomerDao {
	@Inject
	EntityManager em;
	
	public List<Customer> getCustomers(){
		TypedQuery<Customer> query = em.createQuery("SELECT c FROM Customer c", Customer.class);
		return query.getResultList();
	}
	
	public Customer getCustomer(long id) {
		return em.find(Customer.class, id);
	}
	
	@Transactional 
    public Customer addCustomer(Customer Customer) {
    	em.persist(Customer);
    	return Customer;
    } 
    
    @Transactional
    public Customer updateUser(Customer Customer) {
    	em.merge(Customer);
    	return Customer;
    }

    @Transactional
    public void removeUser(Customer Customer) {
    	em.remove(Customer);
    }
    
    @Transactional
    public void removeAllCustomers() {
    	try {
    		Query del = em.createQuery("DELETE FROM Customer WHERE id >= 0");
    	    del.executeUpdate();

    	} catch (SecurityException | IllegalStateException  e) {
    	    e.printStackTrace();
    	}
    }
}
