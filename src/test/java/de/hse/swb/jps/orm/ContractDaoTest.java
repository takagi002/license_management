package de.hse.swb.jps.orm;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Date;
import java.util.List;

import javax.inject.Inject;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import de.hse.swb.jpa.orm.dao.ContractDao;
import de.hse.swb.jpa.orm.dao.UserDao;
import de.hse.swb.jpa.orm.model.Contract;
import de.hse.swb.jpa.orm.model.Customer;
import de.hse.swb.jpa.orm.model.User;
import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class ContractDaoTest {
	@Inject
	ContractDao contractdao;
	
	@Inject
	UserDao userdao;
    
	private Contract createContract() {
		Customer customer = new Customer("customer1");
		customer.setAdresse("Adresse customer1");
		customer.setDepartment("Department customer1");
		User user1 = createUserTest("user1");
		User user2 = createUserTest("user2");
		Contract contract = new Contract();
		contract.setCustomer(customer);
		contract.setUser1(user1);
		contract.setUser2(user2);
		contract.setStartDate(new Date(new java.util.Date().getTime()));
		contract.setEndDate(new Date(new java.util.Date().getTime()));
		contract.setLicenseKey("larfai8rgvinev");
		contract.setIpV4Adress1("192.0.2.146");
		contract.setFeature1(45);
		contract.setFeature1(50);
		contract.setFeature1(98);		
		return contract;
	}
	
	public void addTwoContracts() {
		Contract first = createContract();
		contractdao.save(first);
		Contract second = createContract();
		second.setUser1(createUserTest("user3"));
		second.setUser2(createUserTest("user4"));
		contractdao.save(second);
	}
	
	private User createUserTest(String username) {
		User user = new User(username);
		user.setPassword("xyz");
		user.setName("test");
		user.setFirstname("tester");
		user.setEmail("df@test.ste");
		user.setPhoneNumber1("135425");
		return user;
	}
	
	private void printContract(Contract Contract) {
		System.out.println("id: " + Contract.getContractId());
//		List<Contract> Contracts = Contract.getContracts();
//		for (Contract Contract: Contracts) {
//			System.out.println("  Contract " + Contract.getId() + ": " + Contract.getContractname());
//		}
	}
	
	@BeforeEach @AfterEach
	public void clearAllFromDatabase() {
		contractdao.removeAllContracts();
		userdao.removeAllUsers();
	}
	
	
	@Test
	void addContract_1() {
		Contract first = createContract();
		contractdao.save(first);
		List<Contract> Contracts = contractdao.getContracts();
		assertEquals(Contracts.size(),1);
		printContract(Contracts.get(0));
	}
	
	@Test
	void addContract_2() {
		addTwoContracts();
		List<Contract> Contracts = contractdao.getContracts();
		assertEquals(Contracts.size(),2);
		printContract(Contracts.get(1));
	}
}
