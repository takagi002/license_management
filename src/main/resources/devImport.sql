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

-- no customer
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("admin", "admin", "adad000", "5f4dcc3b5aa765d61d8327deb882cf99", "adad000@test.test", "+009990000343", "6553457777", null, true);
insert into User (name, firstname, username, password, email, phoneNumber1, phoneNumber2, customerId, isAdmin)
	values ("bob", "bob", "bobo000", "5f4dcc3b5aa765d61d8327deb882cf99", "bobo000@test.test", "+009990000343", "6553457777", null, false);
