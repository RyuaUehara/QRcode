/*
  Warnings:

  - You are about to drop the column `customerID` on the `AttendanceRecord` table. All the data in the column will be lost.
  - You are about to drop the column `helperID` on the `AttendanceRecord` table. All the data in the column will be lost.
  - You are about to drop the column `customerID` on the `Customer` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Customer_customerID_key";

-- AlterTable
ALTER TABLE "AttendanceRecord" DROP COLUMN "customerID",
DROP COLUMN "helperID";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "customerID";
