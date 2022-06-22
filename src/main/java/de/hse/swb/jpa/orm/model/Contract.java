package de.hse.swb.jpa.orm.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "Contract")
public class Contract {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "contractId", nullable = false, unique = true)
    private long id;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name = "customerId", referencedColumnName = "customerId", nullable = false)
	private Customer customer;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name = "user1_userId", referencedColumnName = "userId")
	private User user1;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name = "user2_userId", referencedColumnName = "userId")
	private User user2;
	
	@Column(name = "startDate", columnDefinition = "DATE NOT NULL")
    private Date startDate;
	
	@Column(name = "endDate", columnDefinition = "DATE NOT NULL")
    private Date endDate;
	
	@Column(name = "version" , columnDefinition = "VARCHAR(26) NOT NULL")
    private String version;
	
	@Column(name = "licenseKey", columnDefinition = "TEXT NOT NULL")
    private String licenseKey;
	
	@Column(name = "ipV4Adress1", columnDefinition = "VARCHAR(16) NOT NULL")
    private String ipV4Adress1;
	
	@Column(name = "ipV4Adress2", columnDefinition = "VARCHAR(16) NULL")
    private String ipV4Adress2;
	
	@Column(name = "ipV4Adress3", columnDefinition = "VARCHAR(16) NULL")
    private String ipV4Adress3;
	
	@Column(name = "feature1", columnDefinition = "INT NOT NULL")
    private int feature1;
	
	@Column(name = "feature2", columnDefinition = "INT NOT NULL")
    private int feature2;
	
	@Column(name = "feature3", columnDefinition = "INT NOT NULL")
    private int feature3;

	public Contract() {}
	
	public Contract(Customer customer) {
		this.customer = customer;
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

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
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

	public int getFeature1() {
		return feature1;
	}

	public void setFeature1(int feature1) {
		this.feature1 = feature1;
	}

	public int getFeature2() {
		return feature2;
	}

	public void setFeature2(int feature2) {
		this.feature2 = feature2;
	}

	public int getFeature3() {
		return feature3;
	}

	public void setFeature3(int feature3) {
		this.feature3 = feature3;
	}
}
