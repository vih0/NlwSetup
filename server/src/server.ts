import Fastfy from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastfy();
const prisma = new PrismaClient()
app.register(cors)
// metodos http : 
//Get(pegar informações), 
// Post(inserir informações), 
// Put(mudar todos os itens), Patch(mudar um item),
// Delete(apagar)
app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith:"Fazer"
             }
        }
    })
    return habits
})

app.listen({
    port:3333,
}).then(() => {
    console.log('rodando')
})