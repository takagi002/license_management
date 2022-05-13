package de.hse.swb.jpa.orm.model;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "Customer")
public class Customer {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "customerId", nullable = false, unique = true)
    private long id;
	
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

	public long getCustomerId() {
		return id;
	}

	public void setCustomerId(long id) {
		this.id = id;
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
