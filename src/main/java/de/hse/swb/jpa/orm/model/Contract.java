package de.hse.swb.jpa.orm.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "Contract")
public class Contract {
	@Id
    @SequenceGenerator(name = "conSeq", sequenceName = "ZSEQ_CON_ID", allocationSize = 1, initialValue = 10)
    @GeneratedValue(generator = "conSeq")
    @Column(name = "contractId", nullable = false)
    private Long contractId;
	
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
}
