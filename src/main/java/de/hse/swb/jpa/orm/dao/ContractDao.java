package de.hse.swb.jpa.orm.dao;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import de.hse.swb.jpa.orm.model.Contract;

public class ContractDao {
	@Inject
	EntityManager em;
	
	public List<Contract> getUsers(){
		TypedQuery<Contract> query = em.createQuery("SELECT c FROM Contract c", Contract.class);
		List<Contract> results = query.getResultList();
		return results;
	}
	
	public Contract getUser(long id) {
		return em.find(Contract.class, id);
	}

}
