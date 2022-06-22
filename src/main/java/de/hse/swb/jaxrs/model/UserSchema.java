package de.hse.swb.jaxrs.model;

import de.hse.swb.jpa.orm.model.User;

public class UserSchema {
	private long id;
	private String name;
	private String firstname;
	private String username;
	private String password;
	private String email;
	private String phoneNumber;
	private String phoneNumberOptional;
	private boolean isAdmin;
	private long customerId;
	private String customerName;
	
	
	public UserSchema() {}
	public UserSchema(User user) {
		this.id = user.getId();
		this.name = user.getName();
		this.firstname = user.getFirstname();
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.email = user.getEmail();
		this.phoneNumber = user.getPhoneNumber1();
		if(user.getPhoneNumber2() == null){
			this.phoneNumberOptional = "null";
		} else {
			this.phoneNumberOptional = user.getPhoneNumber2();
		}
		
		this.isAdmin = user.isAdmin();
		
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getPhoneNumberOptional() {
		return phoneNumberOptional;
	}
	public void setPhoneNumberOptional(String phoneNumberOptional) {
		this.phoneNumberOptional = phoneNumberOptional;
	}
	public boolean isAdmin() {
		return isAdmin;
	}
	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
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
