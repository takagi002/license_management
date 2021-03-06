package de.hse.swb.jpa.orm.model;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class User {
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	@Column(name = "userId", nullable = false, unique = true)
	private long id;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "customerId", referencedColumnName = "customerId")
	private Customer customer;
	
	@Column(name="name", length=60, nullable = false)
	private String name;
	
	@Column(name="firstname", length=60, nullable = false)
	private String firstname;
	
	@Column(name="username", length=10, nullable = false, unique = true)
	private String username;
	
	@Column(name="password", length=129, nullable = false)
	private String password;
	
	@Column(name="email", length=50, nullable = false)
	private String email;
	
	@Column(name="phoneNumber1", length=45, nullable = false)
	private String phoneNumber1;
	
	@Column(name="phoneNumber2", length=45)
	private String phoneNumber2;
	
	@Column(name="isAdmin", length=45, nullable = false)
	private boolean isAdmin;
	
	public User() {
		this.isAdmin = false;
	}
	
	public User(String username) {
		this.username = username;
		this.isAdmin = false;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber1() {
		return phoneNumber1;
	}

	public void setPhoneNumber1(String phoneNumber1) {
		this.phoneNumber1 = phoneNumber1;
	}

	public String getPhoneNumber2() {
		return phoneNumber2;
	}

	public void setPhoneNumber2(String phoneNumber2) {
		this.phoneNumber2 = phoneNumber2;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	
	public String getPassword() {
		return this.password;
		
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}
