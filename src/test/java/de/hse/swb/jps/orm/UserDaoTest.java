package de.hse.swb.jps.orm;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import de.hse.swb.jpa.orm.dao.UserDao;
import de.hse.swb.jpa.orm.model.User;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class UserDaoTest {
	
	@Inject
    UserDao userdao;
	
	private User createUser(int number) {
		User user = new User("test"+ number);
		user.setPassword("5f4dcc3b5aa765d61d8327deb882cf99"); //MD5 hash of word "password"
		user.setName("tester"+ number);
		user.setFirstname("test"+ number);
		user.setEmail("test"+ number +"@test.test");
		user.setPhoneNumber1("01534135425");
		return user;
	}
	
	private List<User> createMultipleUsers(int amount){
		//amond not more then 999;
		List<User> users = new ArrayList<>();
		for(int i = 0; i < amount; i++)
		{
			users.add(createUser(i));
		}
		return users;
	}
	
	@AfterEach
	private void clearDB() {
		//clear userTable
		userdao.removeAllUsers();
	}
	
	//AddUser
	@Test
	void testAddUser_1() {
		User user = createUser(0);
		userdao.addUser(user);
		
		List<User> results = userdao.getUsers();
		assertEquals(1, results.size());
	}
	
	@Test
	void testAddUser_11() {
		List<User> users = createMultipleUsers(11);
		users.forEach((user) -> userdao.addUser(user));
		
		List<User> results = userdao.getUsers();
		assertEquals(11, results.size());
	}
	
	@Test
	void testUpdateUser() {
		User user = createUser(0);
		userdao.addUser(user);
		
		user.setEmail("ding@test.test");
		userdao.updateUser(user);
		
		User result = userdao.getUser(1);
		assertNotEquals("test0@test.test", result.getEmail());
	}
	
	@Test
	void testRemoveUser() {
		User user = createUser(0);
		userdao.addUser(user);
		
		userdao.removeUser(user);
		
		List<User> results = userdao.getUsers();
		assertEquals(0, results.size());
	}
	
	@Test
	void testRemoveUsers() {
		List<User> users = createMultipleUsers(7);
		users.forEach((user) -> userdao.addUser(user));
		
		userdao.removeAllUsers();
		
		List<User> results = userdao.getUsers();
		assertEquals(0, results.size());
	}
	
	//GetUsers
	@Test
	void testGetUsers_Empty() {
		List<User> results = userdao.getUsers();
		assertEquals(0, results.size());
	}
	
	@Test
	void testGetUsers_34() {
		List<User> users = createMultipleUsers(34);
		users.forEach((user) -> userdao.addUser(user));
		
		List<User> results = userdao.getUsers();
		assertEquals(34, results.size());
	}
	
	//GetUser
	@Test
	void testGetUser_Solo() {
		User user = createUser(0);
		userdao.addUser(user);
		
		User result = userdao.getUser(user.getId());
		assertEquals("test0", result.getUsername());
	}
	
	@Test
	void testGetUser_3thOutOf6() {
		List<User> users = createMultipleUsers(6);
		users.forEach((user) -> userdao.addUser(user));
		
		User result = userdao.getUser(users.get(2).getId());
		assertEquals("test2", result.getUsername());
	}
	
	@Test
	void testGetUserByUsername_Solo() {
		User user = createUser(0);
		userdao.addUser(user);
		
		User result = userdao.getUserByUsername("test0");
		assertEquals("test0", result.getUsername());
	}
	
	@Test
	void testGetUserByUsername_3thOutOf6() {
		List<User> users = createMultipleUsers(6);
		users.forEach((user) -> userdao.addUser(user));
		
		User result = userdao.getUserByUsername("test2");
		assertEquals("test2", result.getUsername());
	}
	
	@Test
	void testLoginCorrect(){
		User user = createUser(0);
		userdao.addUser(user);
		
		User result = userdao.login("test0", "password");
		assertNotEquals(null, result);
	}
	
	@Test
	void testLoginWrong(){
		User user = createUser(0);
		userdao.addUser(user);
		
		User result = userdao.login("test0", "wrong");
		assertEquals(null, result);
	}
	
	@Test
	void testChangePassword() {
		String newPassword = "12345";
		
		User user = createUser(0);
		userdao.addUser(user);
		
		userdao.changePassword(user, newPassword);
		
		User result = userdao.login("test0", newPassword);
		assertNotEquals(null, result);
	}	

	private void printUser(User user) {
		System.out.println("id: " + user.getId());
		System.out.println("Username: " + user.getUsername());
	}
}
