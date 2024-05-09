/*
  Warnings:

  - You are about to drop the column `endTime` on the `shift` table. All the data in the column will be lost.
  - You are about to drop the column `staffId` on the `shift` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `shift` table. All the data in the column will be lost.
  - Added the required column `title` to the `shift` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `shift` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shift" DROP COLUMN "endTime",
DROP COLUMN "staffId",
DROP COLUMN "startTime",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "title" VARCHAR(255) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- RenameIndex
ALTER INDEX "User_email_key" RENAME TO "staff_email_key";
