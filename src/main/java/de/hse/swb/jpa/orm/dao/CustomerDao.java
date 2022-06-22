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
    public Customer addCustomer(Customer customer) {
    	em.persist(customer);
    	return customer;
    } 
    
    @Transactional
    public Customer updateCustomer(Customer customer) {
    	em.merge(customer);
    	return customer;
    }
    
    @Transactional
    public Customer saveCustomer(Customer customer) {
    	if( customer.getId() != 0) {
			return updateCustomer(customer);
		} else {
			return addCustomer(customer);
		}
    }

    @Transactional
    public void removeCustomer(Customer customer) {
    	try {
    		Query removeForeignKey = em.createQuery("UPDATE User SET customerId=null WHERE customerId="+ customer.getId());
    		removeForeignKey.executeUpdate();
    		
    		customer.getContracts().forEach(contract -> em.remove(em.merge(contract)));
    		
    		em.remove(em.merge(customer));
    	} catch (SecurityException | IllegalStateException  e) {
    	    e.printStackTrace();
    	}
    }
    
    @Transactional
    public void removeAllCustomers() {
    	try {
    		
    		Query removeForeignKey = em.createQuery("UPDATE User SET customerId=null WHERE customerId>= 0");
    		removeForeignKey.executeUpdate();
    		
    		removeForeignKey = em.createQuery("DELETE FROM Contract WHERE customerId>= 0");
    		removeForeignKey.executeUpdate();
    		
    		Query del = em.createQuery("DELETE FROM Customer WHERE id >= 0");
    	    del.executeUpdate();
    	} catch (SecurityException | IllegalStateException  e) {
    	    e.printStackTrace();
    	}
    }
}
