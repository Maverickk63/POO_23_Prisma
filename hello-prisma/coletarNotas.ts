import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
  console.log(calcularNota("PROFESSOR","EXEMPLO"))//Printa a media das notas dadas pelos professores
}

async function calcularNota(tipoUsuario: "ALUNO" | "PROFESSOR", grupoId: string) {
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