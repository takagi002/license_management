package de.hse.swb.jaxrs.model;

import de.hse.swb.jpa.orm.model.Customer;

public class CustomerSimpleSchema {
	public long id;
	public String name;
	public String address;
	public String addressOptional;
	
	public CustomerSimpleSchema(){}
	public CustomerSimpleSchema(Customer customer) {
		this.id = customer.getId();
		this.name = customer.getName();
		this.address = customer.getAdresse();
		
		if(customer.getAdresse2() == null) {
			this.addressOptional = "null";
		}else {
			this.addressOptional = customer.getAdresse2();
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddressOptional() {
		return addressOptional;
	}
	public void setAddressOptional(String addressOptional) {
		this.addressOptional = addressOptional;
	}
}
