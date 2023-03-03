/*
  Warnings:

  - You are about to alter the column `soldPrice` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Sale" ALTER COLUMN "soldPrice" SET DATA TYPE INTEGER;
