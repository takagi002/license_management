-- Add sample Customers
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "Cool Inc.", "Trains", "26 County Road 45 N, Nashville,ar, 31852  United States");
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "D.A.S. GmhB", "Cars", "Ginsterweg 35, 28213  Schwachhausen, Germany");
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "cerf", "Farming", "12 Rue Des Aulnes, St Avold, France");
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "Tudou", "Farming", "Suite 3603 The Center 99 Queen´s Rd Central,Wan Chai District, Hongkong");
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "BUG Ltd.", "Trains", "17  Bryant Road,Kettering,England,United Kingdom");
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "Alles AG", "Trains", "Finkenweg 22, 74252  Massenbachhausen, Germany");
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "Brum AG", "Cars", "Quelkhorner Straße 9, 28325  Osterholz, Germany");
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "トラクター", "Farming", "〒300-0068茨城県土浦市西並木町23番3號");
INSERT INTO Customer (name, department, adresse) 
	VALUES ( "NoCear", "Space", "2 466th Avenue, Stuart,ne, 68380  United States");

-- Add sample users
-- Cool Inc. 
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("oneoner", "one", "onon000", "5f4dcc3b5aa765d61d8327deb882cf99", "onon000@test.test", "+009990000343", "6553457777", 1, false);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("twonerner", "two", "twtw000", "5f4dcc3b5aa765d61d8327deb882cf99", "twtw000@test.test", "+009990000343", "6553457777", 1, false);

-- D.A.S. GmhB    
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("oneoner", "one", "onon001", "5f4dcc3b5aa765d61d8327deb882cf99", "onon001@test.test", "+009990000343", "6553457777", 2, false);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("twonerner", "two", "twtw001", "5f4dcc3b5aa765d61d8327deb882cf99", "twtw001@test.test", "+009990000343", null, 2, false); 

-- cerf
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("thirder", "third", "thth000", "5f4dcc3b5aa765d61d8327deb882cf99", "thth000@test.test", "+009990000343", "6553457777", 3, false);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("forer", "fore", "fofon000", "5f4dcc3b5aa765d61d8327deb882cf99", "fofon000@test.test", "+009990000343", "6553457777", 3, false);

-- Tudou  
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("fiver", "five", "fifi000", "5f4dcc3b5aa765d61d8327deb882cf99", "fifi000@test.test", "+009990000343", "6553457777", 4, false);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("sixerr", "six", "sisi000", "5f4dcc3b5aa765d61d8327deb882cf99", "sisi000@test.test", "+009990000343", null, 4, false);

-- BUG Ltd.  
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("only", "one", "onon002", "5f4dcc3b5aa765d61d8327deb882cf99", "onon002@test.test", "+009990000343", "6553457777", 5, false);

-- Alles AG 
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("sewener", "seven", "sese000", "5f4dcc3b5aa765d61d8327deb882cf99", "sese000@test.test", "+009990000343", "6553457777", 6, false);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("eighter", "eight", "eiei000", "5f4dcc3b5aa765d61d8327deb882cf99", "eiei000@test.test", "+009990000343", "6553457777", 6, false);
 
-- Brum AG
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("niner", "nine", "nini000", "5f4dcc3b5aa765d61d8327deb882cf99", "nini000@test.test", "+009990000343", null, 7, false);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("tener", "ten", "tete000", "5f4dcc3b5aa765d61d8327deb882cf99", "tete000@test.test", "+009990000343", "6553457777", 7, false);

-- トラクター  
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("elefener", "elefen", "elel000", "5f4dcc3b5aa765d61d8327deb882cf99", "elel000@test.test", "+009990000343", "6553457777", 8, false);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("twelver", "twelf", "twtw002", "5f4dcc3b5aa765d61d8327deb882cf99", "twtw002@test.test", "+009990000343", "6553457777", 8, false);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("dud", "admin", "duad000", "5f4dcc3b5aa765d61d8327deb882cf99", "duad000@test.test", "+009990000343", "6553457777", 8, true);

-- no customer
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("admin", "admin", "admin", "5f4dcc3b5aa765d61d8327deb882cf99", "adad000@test.test", "+009990000343", "6553457777", null, true);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("bob", "bob", "bobo000", "5f4dcc3b5aa765d61d8327deb882cf99", "bobo000@test.test", "+009990000343", "6553457777", null, false);

-- Add sample contracts
-- Contract -> Customer: Cool Inc.  /	UserIDs: 1 and 2
insert into contracts (customerId, userId, userId, startDate, endDate, licenseKey, ipV4Adress1, ipV4Adress2, ipV4Adress3, feature1, feature2, feature3)
	values (1, 1, 2, '2022-06-19', '2022-06-22', 'BC195F447B9681F7', '110.98.77.177', '57.228.77.32', '211.154.51.8', 973, 9, 34);

-- Contract -> Customer: BUG Ltd.	/	UserIDs: 4 and 5
insert into contracts (customerId, userId, userId, startDate, endDate, licenseKey, ipV4Adress1, ipV4Adress2, ipV4Adress3, feature1, feature2, feature3)
	values (5, 4, 5, '2018-03-19', '2020-09-31', '6DF7688E7FFC1E5C', '184.226.122.157', '242.66.42.247', '28.61.236.173', 52, 76, 157);

-- Contract -> Customer: BUG Ltd.	/	UserIDs: 4 and 5
insert into contracts (customerId, userId, userId, startDate, endDate, licenseKey, ipV4Adress1, ipV4Adress2, ipV4Adress3, feature1, feature2, feature3)
	values (5, 6, 7, '2020-07-19', '2021-02-29', 'C1BBCFE74944293C', '151.240.237.194', '106.231.49.9', '85.204.9.139', 47, 77, 1);

-- Constract -> Customer: NoCear	/	UserIDs: 3 and 4
insert into contracts (customerId, userId, userId, startDate, endDate, licenseKey, ipV4Adress1, ipV4Adress2, ipV4Adress3, feature1, feature2, feature3)
	values (9, 3, 4, '2022-02-04', '2021-02-29', '9B928DCBC51ECD46', '93.1.169.20', '145.165.229.5', '161.103.136.219', 67, 59, 37);