/*
  Warnings:

  - A unique constraint covering the columns `[liderId]` on the table `Grupo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Grupo_liderId_key" ON "Grupo"("liderId");
