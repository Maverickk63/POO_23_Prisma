/*
  Warnings:

  - You are about to drop the column `liderId` on the `Grupo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Grupo_liderId_key";

-- AlterTable
ALTER TABLE "Grupo" DROP COLUMN "liderId",
ADD COLUMN     "liderNome" TEXT NOT NULL DEFAULT 'Nao Informado';
