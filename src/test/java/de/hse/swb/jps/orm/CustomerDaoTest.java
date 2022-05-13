package de.hse.swb.jps.orm;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import javax.inject.Inject;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import de.hse.swb.jpa.orm.dao.CustomerDao;
import de.hse.swb.jpa.orm.model.Customer;

public class CustomerDaoTest {
	@Inject
	CustomerDao customerDao;
    
	private Customer createCustomer(String prefix) {
		Customer customer = new Customer(prefix);
		return customer;
	}
	
	public void addTwoCustomers() {
		Customer first = createCustomer("firstCustomer");
		customerDao.addCustomer(first);
		Customer second = createCustomer("secondCustomer");
		customerDao.addCustomer(second);
	}

	
	private void printCustomer(Customer customer) {
		System.out.println("ID: " + customer.getCustomerId());
		System.out.println("CustomerName: " + customer.getName());
//		List<Project> projects = Customer.getProjects();
//		for (Project project: projects) {
//			System.out.println("  Project " + project.getId() + ": " + project.getProjectname());
//		}
	}
	
	@BeforeEach
	public void clearAllFromDatabase() {
		customerDao.removeAllCustomers();
	}
	
	@Test
	void addCustomer_1() {
		Customer first = createCustomer("first");
		customerDao.addCustomer(first);
		List<Customer> deps = customerDao.getCustomers();
		assertEquals(deps.size(),1);
		printCustomer(deps.get(0));
	}
}
