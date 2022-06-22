package de.hse.swb.jaxrs.model;

import de.hse.swb.jpa.orm.model.Contract;

public class ContractSchema {
	private long id;
	private String startDate;
	private String endDate;
	private String licenseKey;
	private String version;
	private int feature1;
	private int feature2;
	private int feature3;
	private String ipv4address1;
	private String ipv4address2;
	private String ipv4address3;
	private CustomerSchema customer;
	private UserSimpelSchema user1;
	private UserSimpelSchema user2;
	
	public ContractSchema() {}
	public ContractSchema(Contract contract) {
		this.id = contract.getId();
		this.startDate = contract.getStartDate().toString();
		this.endDate = contract.getEndDate().toString();
		this.licenseKey = contract.getLicenseKey();
		this.version = contract.getVersion();
		this.feature1 = contract.getFeature1();
		this.feature2 =  contract.getFeature2();
		this.feature3 = contract.getFeature3();
		this.ipv4address1 = contract.getIpV4Adress1();
		this.ipv4address2 = contract.getIpV4Adress2();
		this.ipv4address3 = contract.getIpV4Adress3();
		this.customer = new CustomerSchema(contract.getCustomer());
		this.user1 = new UserSimpelSchema(contract.getUser1());
		this.user2 = new UserSimpelSchema(contract.getUser2());
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
	public String getLicenseKey() {
		return licenseKey;
	}
	public void setLicenseKey(String licenseKey) {
		this.licenseKey = licenseKey;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public int getFeature1() {
		return feature1;
	}
	public void setFeature1(int features1) {
		this.feature1 = features1;
	}
	public int getFeature2() {
		return feature2;
	}
	public void setFeature2(int features2) {
		this.feature2 = features2;
	}
	public int getFeature3() {
		return feature3;
	}
	public void setFeature3(int features3) {
		this.feature3 = features3;
	}
	public String getIpv4address1() {
		return ipv4address1;
	}
	public void setIpv4address1(String ipv4address1) {
		this.ipv4address1 = ipv4address1;
	}
	public String getIpv4address2() {
		return ipv4address2;
	}
	public void setIpv4address2(String ipv4address2) {
		this.ipv4address2 = ipv4address2;
	}
	public String getIpv4address3() {
		return ipv4address3;
	}
	public void setIpv4address3(String ipv4address3) {
		this.ipv4address3 = ipv4address3;
	}
	public CustomerSchema getCustomer() {
		return customer;
	}
	public void setCustomer(CustomerSchema customer) {
		this.customer = customer;
	}
	public UserSimpelSchema getUser1() {
		return user1;
	}
	public void setUser1(UserSimpelSchema user1) {
		this.user1 = user1;
	}
	public UserSimpelSchema getUser2() {
		return user2;
	}
	public void setUser2(UserSimpelSchema user2) {
		this.user2 = user2;
	}
	
}
