-- CreateTable
CREATE TABLE "Helper" (
    "id" SERIAL NOT NULL,
    "helperID" TEXT NOT NULL,
    "helperName" TEXT,

    CONSTRAINT "Helper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "customerID" TEXT NOT NULL,
    "customerName" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceRecord" (
    "id" SERIAL NOT NULL,
    "helperID" TEXT NOT NULL,
    "helperName" TEXT NOT NULL,
    "customerID" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "checkIn" TIMESTAMP(3),
    "checkOut" TIMESTAMP(3),

    CONSTRAINT "AttendanceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Helper_helperID_key" ON "Helper"("helperID");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerID_key" ON "Customer"("customerID");


insert into Helper (id,helperID,helperName) values (1,1,"h1"),
(2,2,"h2"),(3,3,"h3");

insert into Customer(id,customerID,customerName) values (1,1,"c1"),(2,2,"c2"),(3,3,"c3");

-- insert into AttendanceRecord(id,helperID,helperName,customerID,customerName,checkIn,checkOut)