// Script criado para a requisitar a nota de um grupo dada por professores ou alunos
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
  console.log(calcularNota("PROFESSOR","EXEMPLO"))//Printa a media das notas dadas pelos professores para o grupo (substituir o exemplo pela id do grupo)
}

async function calcularNota(tipoUsuario: "ALUNO" | "PROFESSOR", grupoId: string) {
  // Busca pelas avaliações do grupo feitas por um usuario com o tipo especificado
  const avaliacoes = await prisma.avaliacao.findMany({
    where: {
      grupoId,
      usuario: {
        tipoUsuario: tipoUsuario,
      },
    },
    select: {
      nota: true,
    },
  });

  const totalAvaliacoes = avaliacoes.length;

  if (totalAvaliacoes === 0) {
    return 0; // Evitar divisão por zero
  }
  //Soma as notas para dividir pela quantidade de avaliações
  const somaNotas = avaliacoes.reduce((total, avaliacao) => {
    return total + avaliacao.nota;
  }, 0);

  const media = somaNotas / totalAvaliacoes;

  return media;
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
