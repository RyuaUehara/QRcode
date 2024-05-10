-- CreateTable
CREATE TABLE Helper (
    id SERIAL PRIMARY KEY,
    helperID TEXT NOT NULL UNIQUE,
    helperName TEXT
);

-- CreateTable
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    customerID TEXT NOT NULL UNIQUE,
    customerName TEXT
);

-- CreateTable
CREATE TABLE AttendanceRecord (
    id SERIAL PRIMARY KEY,
    helperID TEXT NOT NULL,
    helperName TEXT NOT NULL,
    customerID TEXT NOT NULL,
    customerName TEXT NOT NULL,
    checkIn TIMESTAMP(3),
    checkOut TIMESTAMP(3),
    FOREIGN KEY (helperID) REFERENCES Helper(helperID),
    FOREIGN KEY (customerID) REFERENCES Customer(customerID)
);

-- CreateIndex
CREATE UNIQUE INDEX "Helper_helperID_key" ON "Helper"("helperID");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerID_key" ON "Customer"("customerID");
<<<<<<< HEAD


insert into Helper (id,helperID,helperName) values (1,1,"h1"),
(2,2,"h2"),(3,3,"h3");

insert into Customer(id,customerID,customerName) values (1,1,"c1"),(2,2,"c2"),(3,3,"c3");

-- insert into AttendanceRecord(id,helperID,helperName,customerID,customerName,checkIn,checkOut)
=======
>>>>>>> 5ff932f4b3ba9915f21207196e00ae456ff4359f
