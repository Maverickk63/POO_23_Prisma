/*
  Warnings:

  - A unique constraint covering the columns `[estande,diaApresentacao]` on the table `Grupo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Grupo_estande_diaApresentacao_key" ON "Grupo"("estande", "diaApresentacao");
