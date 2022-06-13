package de.hse.swb.jaxrs.model;

import de.hse.swb.jpa.orm.model.User;

public class UserSimpelSchema {
	
	private long id;
	private String name;
	private String firstname;
	private String username;
	private String email;
	private long customerId;
	private String customerName;
	
	public UserSimpelSchema() {}
	public UserSimpelSchema(User user) {
		this.id = user.getId();
		this.name = user.getName();
		this.firstname = user.getFirstname();
		this.username = user.getUsername();
		this.email = user.getEmail();
		
		if(user.getCustomer() == null) {
			this.customerId = 0;
			this.customerName = "null";
		}else {
			this.customerId = user.getCustomer().getId();
			this.customerName = user.getCustomer().getName();
		}
		
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
}
