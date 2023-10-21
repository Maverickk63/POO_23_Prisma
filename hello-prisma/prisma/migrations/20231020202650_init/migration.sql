/*
  Warnings:

  - You are about to drop the column `lider` on the `Grupo` table. All the data in the column will be lost.
  - You are about to drop the column `membros` on the `Grupo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[liderId]` on the table `Grupo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `liderId` to the `Grupo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grupoId` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grupo" DROP COLUMN "lider",
DROP COLUMN "membros",
ADD COLUMN     "liderId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "grupoId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_liderId_key" ON "Grupo"("liderId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grupo" ADD CONSTRAINT "Grupo_liderId_fkey" FOREIGN KEY ("liderId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
