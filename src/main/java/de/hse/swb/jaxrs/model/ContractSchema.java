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
	private String ipV4Address1;
	private String ipV4Address2;
	private String ipV4Address3;
	private long customerId;
	private String customerName;
	private long user1Id;
	private String user1Name;
	private long user2Id;
	private String user2Name;
	
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
		this.ipV4Address1 = contract.getIpV4Adress1();
		this.ipV4Address2 = contract.getIpV4Adress2();
		this.ipV4Address3 = contract.getIpV4Adress3();
		this.customerId = contract.getCustomer().getId();
		this.customerName = contract.getCustomer().getName();
		this.user1Id = contract.getUser1().getId();
		this.user1Name = contract.getUser1().getName();
		this.user2Id = contract.getUser2().getId();
		this.user2Name = contract.getUser1().getName();
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
	public String getIpV4Address1() {
		return ipV4Address1;
	}
	public void setIpV4Address1(String ipV4Address1) {
		this.ipV4Address1 = ipV4Address1;
	}
	public String getIpV4Address2() {
		return ipV4Address2;
	}
	public void setIpV4Address2(String ipV4Address2) {
		this.ipV4Address2 = ipV4Address2;
	}
	public String getIpV4Address3() {
		return ipV4Address3;
	}
	public void setIpV4Address3(String ipV4Address3) {
		this.ipV4Address3 = ipV4Address3;
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
	public long getUser1Id() {
		return user1Id;
	}
	public void setUser1Id(long user1Id) {
		this.user1Id = user1Id;
	}
	public String getUser1Name() {
		return user1Name;
	}
	public void setUser1Name(String user1Name) {
		this.user1Name = user1Name;
	}
	public long getUser2Id() {
		return user2Id;
	}
	public void setUser2Id(long user2Id) {
		this.user2Id = user2Id;
	}
	public String getUser2Name() {
		return user2Name;
	}
	public void setUser2Name(String user2Name) {
		this.user2Name = user2Name;
	}
	
}
