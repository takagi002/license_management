package de.hse.swb.jpa.orm.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "Contract")
public class Contract {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "contractId", nullable = false, unique = true)
    private Long id;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "customerId", referencedColumnName = "customerId", nullable = false)
	private Customer customer;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "user1_userId", referencedColumnName = "userId", nullable = false)
	private User user1;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "user2_userId", referencedColumnName = "userId")
	private User user2;
	
	@Column(name = "startDate", columnDefinition = "DATE NOT NULL")
    private Date startDate;
	
	@Column(name = "endDate", columnDefinition = "DATE NOT NULL")
    private Date endDate;
	
	@Column(name = "licenseKey", columnDefinition = "TEXT NOT NULL")
    private String licenseKey;
	
	@Column(name = "ipV4Adress1", columnDefinition = "VARCHAR(16) NOT NULL")
    private String ipV4Adress1;
	
	@Column(name = "ipV4Adress2", columnDefinition = "VARCHAR(16) NULL")
    private String ipV4Adress2;
	
	@Column(name = "ipV4Adress3", columnDefinition = "VARCHAR(16) NULL")
    private String ipV4Adress3;
	
	@Column(name = "feature1", columnDefinition = "MEDIUMINT NOT NULL")
    private String feature1;
	
	@Column(name = "feature2", columnDefinition = "MEDIUMINT NOT NULL")
    private String feature2;
	
	@Column(name = "feature3", columnDefinition = "MEDIUMINT NOT NULL")
    private String feature3;

	public Contract() {}
	
	public Contract(Customer customer) {
		this.customer = customer;
	}
	
	public Long getContractId() {
		return id;
	}

	public void setContractId(Long id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public User getUser1() {
		return user1;
	}

	public void setUser1(User user1) {
		this.user1 = user1;
	}

	public User getUser2() {
		return user2;
	}

	public void setUser2(User user2) {
		this.user2 = user2;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getLicenseKey() {
		return licenseKey;
	}

	public void setLicenseKey(String licenseKey) {
		this.licenseKey = licenseKey;
	}

	public String getIpV4Adress1() {
		return ipV4Adress1;
	}

	public void setIpV4Adress1(String ipV4Adress1) {
		this.ipV4Adress1 = ipV4Adress1;
	}

	public String getIpV4Adress2() {
		return ipV4Adress2;
	}

	public void setIpV4Adress2(String ipV4Adress2) {
		this.ipV4Adress2 = ipV4Adress2;
	}

	public String getIpV4Adress3() {
		return ipV4Adress3;
	}

	public void setIpV4Adress3(String ipV4Adress3) {
		this.ipV4Adress3 = ipV4Adress3;
	}

	public String getFeature1() {
		return feature1;
	}

	public void setFeature1(String feature1) {
		this.feature1 = feature1;
	}

	public String getFeature2() {
		return feature2;
	}

	public void setFeature2(String feature2) {
		this.feature2 = feature2;
	}

	public String getFeature3() {
		return feature3;
	}

	public void setFeature3(String feature3) {
		this.feature3 = feature3;
	}
}
