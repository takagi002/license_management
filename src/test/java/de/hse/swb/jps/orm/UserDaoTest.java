package de.hse.swb.jps.orm;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import javax.inject.Inject;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import de.hse.swb.jpa.orm.dao.UserDao;
import de.hse.swb.jpa.orm.model.User;
import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class UserDaoTest {
	
	@Inject
    UserDao userdao;
	
	@Test
	private User createUser(String prefix) {
		User user = new User();
		user.setUsername(prefix+"UserName");
		user.setPassword("xyz");
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
//		List<Project> projects = person.getProjects();
//		for (Project project: projects) {
//			System.out.println("  Project " + project.getId() + ": " + project.getProjectname());
//		}
	}
}
