/*
  Warnings:

  - You are about to drop the column `local_id` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `local_id` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `localId` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localId` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `local` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `address_local_id_fkey`;

-- DropForeignKey
ALTER TABLE `contacts` DROP FOREIGN KEY `contacts_local_id_fkey`;

-- AlterTable
ALTER TABLE `address` DROP COLUMN `local_id`,
    ADD COLUMN `localId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `contacts` DROP COLUMN `local_id`,
    ADD COLUMN `localId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `local` ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_localId_fkey` FOREIGN KEY (`localId`) REFERENCES `local`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_localId_fkey` FOREIGN KEY (`localId`) REFERENCES `local`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
