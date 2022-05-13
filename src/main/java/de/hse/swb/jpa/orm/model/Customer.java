package de.hse.swb.jpa.orm.model;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "Customer")
public class Customer {
	@Id
    @SequenceGenerator(name = "custSeq", sequenceName = "ZSEQ_CUS_ID", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "custSeq")
	@Column(name = "customerId", nullable = false, unique = true)
    private Long id;
	
	@Column(name = "name", length=60, nullable = false)
    private String name;
	
	@Column(name = "department", length=60, nullable = false)
    private String department;
	
	@Column(name = "adresse", length=100, nullable = false)
    private String adresse;
	
	@OneToMany(mappedBy = "customer")
	private List<User> users;
	
	@OneToMany(mappedBy = "customer")
	private List<Contract> contracts;
	
	public Customer() {}

    public Customer(String customerName) {
        this.name = customerName;
    }

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public List<Contract> getContracts() {
		return contracts;
	}

	public void setContracts(List<Contract> contracts) {
		this.contracts = contracts;
	}
}
