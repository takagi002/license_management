package de.hse.swb.jaxrs.model;

import de.hse.swb.jpa.orm.model.Contract;

public class ContractSimpleSchema {
	private long id;
	private String startDate;
	private String endDate;
	private String version;
	private long customerId;
	private String customerName;
	
	public ContractSimpleSchema() {}
	public ContractSimpleSchema(Contract contract) {
		this.id = contract.getId();
		this.startDate = contract.getStartDate().toString();
		this.endDate = contract.getEndDate().toString();
		this.version = contract.getVersion();
		this.customerId = contract.getCustomer().getId();
		this.customerName = contract.getCustomer().getName();
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
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
