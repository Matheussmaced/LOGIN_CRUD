/*
  Warnings:

  - You are about to drop the column `password` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[password_hash]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password_hash` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_password_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "password",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password_hash" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_password_hash_key" ON "Users"("password_hash");
