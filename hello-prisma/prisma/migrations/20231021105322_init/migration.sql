/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId,grupoId]` on the table `Avaliacao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_usuarioId_grupoId_key" ON "Avaliacao"("usuarioId", "grupoId");
