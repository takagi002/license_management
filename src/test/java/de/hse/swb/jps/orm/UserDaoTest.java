package de.hse.swb.jps.orm;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import javax.inject.Inject;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import de.hse.swb.jpa.orm.dao.UserDao;
import de.hse.swb.jpa.orm.model.Customer;
import de.hse.swb.jpa.orm.model.User;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class UserDaoTest {
	
	@Inject
    UserDao userdao;
	
	public Customer creatCostomer(String name) {
		Customer c = new Customer(name);
		c.setCustomerId(new Long(3));
		c.setAdresse("sdf");
		c.setDepartment("gh");
		return c;
	}
	
	private User createUser(String prefix) {
		User user = new User(prefix+"UserName");
		user.setPassword("xyz");
		user.setName("test");
		user.setFirstname("tester");
		user.setEmail("df@test.ste");
		user.setPhoneNumber1("135425");
		user.setCustomer(creatCostomer("bla"));
		printUser(user);
		return user;
	}
	
	@BeforeEach
	public void clearAllFromDatabase() {
		userdao.removeAllUsers();
	}
	
	@Test
	void addUser_1() {
		User firstPerson = createUser("first");
		userdao.save(firstPerson);
		List<User> users = userdao.getUsers();
		assertEquals(users.size(),1);
		printUser(users.get(0));
		
	}

	private void printUser(User user) {
		System.out.println("id: " + user.getId());
		System.out.println("Username: " + user.getUsername());
	}
}
