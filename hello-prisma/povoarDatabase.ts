const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main(){
    dadosIniciais();
}

const dadosIniciais = async () => {
    try {
      // Cria 2 grupos
      const grupo1 = await prisma.grupo.create({
        data: {
          nome: 'Braço Ecológico',
          estande: 1,
          diaApresentacao: new Date(),
        },
      });
  
      const grupo2 = await prisma.grupo.create({
        data: {
          nome: 'Árvore digital',
          estande: 2,
          diaApresentacao: new Date(),
        },
      });
  
      // Cria 4 usuários do tipo ALUNO
      const usuario1 = await prisma.usuario.create({
        data: {
          nome: 'Francisco Sanco',
          email: 'francisco@gmail.com',
          matricula: 123,
          tipoUsuario: 'ALUNO',
          grupoId: grupo1.id,
        },
      });
  
      const usuario2 = await prisma.usuario.create({
        data: {
          nome: 'Brunette Rodrigues',
          email: 'brunetterodrigues@gmail.com',
          matricula: 456,
          tipoUsuario: 'ALUNO',
          grupoId: grupo1.id,
        },
      });
  
      const usuario3 = await prisma.usuario.create({
        data: {
          nome: 'Joao Silva Junior',
          email: 'joaosilvajunior@gmail.com',
          matricula: 789,
          tipoUsuario: 'ALUNO',
          grupoId: grupo2.id,
        },
      });
  
      const usuario4 = await prisma.usuario.create({
        data: {
          nome: 'Alex Leonil ',
          email: 'alexleonil@gmail.com',
          matricula: 101,
          tipoUsuario: 'ALUNO',
          grupoId: grupo2.id,
        },
      });
  
      console.log('Dados iniciais criados com sucesso.');
    } catch (error) {
      console.error('Erro ao criar dados iniciais:', error);
    } finally {
      await prisma.$disconnect();
    }
  };
  
  

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })