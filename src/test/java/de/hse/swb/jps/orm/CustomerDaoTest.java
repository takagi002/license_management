package de.hse.swb.jps.orm;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import javax.inject.Inject;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import de.hse.swb.jpa.orm.dao.CustomerDao;
import de.hse.swb.jpa.orm.dao.UserDao;

import de.hse.swb.jpa.orm.model.Customer;
import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class CustomerDaoTest {
	@Inject
	CustomerDao customerDao;
    
	private Customer createCustomer(String prefix) {
		Customer customer = new Customer(prefix);
		customer.setDepartment("Test Department");
		customer.setAdresse("Test Adress");
		return customer;
	}
	
	public void addTwoCustomers() {
		Customer first = createCustomer("firstCustomer");
		customerDao.addCustomer(first);
		Customer second = createCustomer("secondCustomer");
		customerDao.addCustomer(second);
		printCustomer(first);
		printCustomer(second);
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
	public void clearDatabase() {
		customerDao.removeAllCustomers();
	}
	
	@Test
	void addCustomer_1() {
		Customer c1 = createCustomer("first");
		customerDao.addCustomer(c1);
		List<Customer> deps = customerDao.getCustomers();
		assertEquals(deps.size(),1);
		printCustomer(deps.get(0));
	}
}
