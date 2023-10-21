import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    avaliar(10,'Exemplo','Exemplo')//Coloque valores que existam na database no lugar do Exemplo
}

async function avaliar(nota: number, usuarioId:string, grupoId:string) {
    const avalia = await prisma.avaliacao.create({
        data: {
            nota: nota,
            usuarioId: usuarioId,
            grupoId: grupoId,
          },})
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