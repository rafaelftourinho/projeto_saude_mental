/*
  Warnings:

  - Added the required column `bairro` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` ADD COLUMN `bairro` VARCHAR(191) NOT NULL,
    MODIFY `cidade` VARCHAR(191) NOT NULL,
    MODIFY `estado` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `local` MODIFY `preco` VARCHAR(191) NOT NULL;
