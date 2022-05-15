package de.hse.swb.jpa.orm.dao;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import de.hse.swb.jpa.orm.model.Contract;
import de.hse.swb.jpa.orm.model.User;

@ApplicationScoped
public class ContractDao {
	@Inject
	EntityManager em;
	
	public List<Contract> getContracts(){
		TypedQuery<Contract> query = em.createQuery("SELECT c FROM Contract c", Contract.class);
		return query.getResultList();
	}
	
	public Contract getContract(Long id) {
		return em.find(Contract.class, id);
	}
	
	public List<Contract> getContracts(User user) {
	   	 TypedQuery<Contract> query = em.createQuery(
	   			 "SELECT contr FROM Contract contr JOIN contr.User users WHERE users.userId = :USER", 
	   			 Contract.class);
	   	 query.setParameter("USER",user.getId());
	   	 return query.getResultList();
	}
	
    @Transactional
    public Contract save(Contract contract) {
    	if (contract.getContractId() != 0) {
    		contract = em.merge(contract);
    	} else {
    		em.persist(contract);
    	}
    	return contract;
    }

    @Transactional
    public void removeContract(Contract contract) {
    	em.remove(contract);
    }
    
    @Transactional
    public void addUser1ToContract(User user, Contract contract) {
    	if(contract.getUser1() == null) {
    		contract.setUser1(user);
    	}
		save(contract);
    }
    
    @Transactional
    public void addUser2ToContract(User user, Contract contract) {
    	if(contract.getUser2() == null) {
    		contract.setUser2(user);
    	}
		save(contract);
    }
    
    @Transactional
    public void removeAllContracts() {
    	try {
    	    Query del = em.createQuery("DELETE FROM Contract WHERE id >= 0");
    	    del.executeUpdate();

    	} catch (SecurityException | IllegalStateException  e) {
    	    e.printStackTrace();
    	}
    }
}
