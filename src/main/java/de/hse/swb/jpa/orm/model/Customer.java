package de.hse.swb.jpa.orm.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
	
	@Column(name = "adresse2", length=100)
    private String adresse2;
	
	@OneToMany(mappedBy = "customer")
	private List<User> users;
	
	@OneToMany(mappedBy = "customer")
	private List<Contract> contracts;

	public Customer() {}

    public Customer(String customerName) {
        this.name = customerName;
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
	
	public String getAdresse2() {
		return adresse2;
	}

	public void setAdresse2(String adresse2) {
		this.adresse2 = adresse2;
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
