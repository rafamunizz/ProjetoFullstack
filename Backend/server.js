import {  PrismaClient } from "@prisma/client";
import express, { json } from "express"
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import "dotenv/config";
import cors from "cors"



const prisma = new PrismaClient();
const app = express()

app.use(json())
app.use(cors())
const port = 3000;

app.get('/Usuarios', async (req, res) => {

    try {
        const usuarios = await prisma.user.findMany();
        
        console.log("Usuários encontrados com sucesso");
    
        res.status(200).json(usuarios); 
        
    } catch (error) {
        console.log("Erro ao encontrar usuário", error);

        res.status(500).json({ message: "Erro ao buscar usuários" });
    }
});


app.post('/Usuarios/post', async (req, res) => {

        const {name, senha} = req.body

    //validation

        if(!name){
            return res.status(422).json({message: "O nome é obrigatório"})
        }
        if(!senha){
            return res.status(422).json({message: "O senha é obrigatório"})
        }

        const salt = await bcrypt.genSalt(12)
        const passowordhash = await bcrypt.hash(senha, salt)


    try {
        const dados = await prisma.user.create({
            data: {
            name: name,
            senha: passowordhash
            }
        })

        
        const token = jwt.sign(
            {id: dados.id},
            process.env.SECRET,
            {expiresIn: '1d'}
        )

        res.status(201).json({message: "Usuário criado com sucesso", user:dados, token: token})
        console.log("Usuário criado com sucesso ! ")

    } catch(error){
        console.log("Erro ao criar usuário", error);

        res.status(400).json({ message: "Erro ao criar usuários" });
    }
})


app.put('/Usuarios/:id', async (req, res) => {

    const {name, senha} = req.body
    const {id} = req.params

    const salt = await bcrypt.genSalt(12)
    const passowordhash = await bcrypt.hash(senha, salt)

    try {
        const usuarioUpdate = await prisma.user.update({
            where:{ id: id},
            data: {
                name: name,
                senha: passowordhash
            }
        })

        res.status(201).json(usuarioUpdate);
        console.log("Usuário atualizado com sucesso !!");


    } catch (error){
        console.log("Erro ao atualizar usuario", error)
        res.status(400).json({ message: "Erro ao atualizar usuários" });
    }
})


app.delete('/Usuarios/:id', async (req, res) => {

    const {id} = req.params

    try {
        const userDelete = await prisma.user.delete({
            where:{id: id}
        })

        res.status(201).json(userDelete);
        console.log("Usuário deletado com sucesso !!");

    } catch(error){
        console.log("Erro ao deletar usuário", error);
        res.status(401).json({message: "Erro ao deletar usuário"})
    }
})

app.post('/login', async (req, res) => {
    const {name, senha} = req.body;

    if(!name){
        return res.status(422).json({message: "Usuário não existe"})
    }

    if(!senha){
        return res.status(422).json({message: "Senha não existe"})
    }

 
        const user = await prisma.user.findFirst({
            where : {
                name:name
            }
        })

        if(!user){
            return res.status(404).json({ message: "Usuário não encontrado!" })
        }

        const checkpassoword =  await bcrypt.compare(senha, user.senha)

        if(!checkpassoword){
            return res.status(404).json({ message: "senha não encontrado!" })
        }


        try {
            const token = jwt.sign(
                {id: user.id},
                process.env.SECRET,
                {expiresIn: '1d'}
            ) 

        res.status(201).json({message:"Usuario encontardo com sucesso", token:token, user:{id:user.id, name:user.name}})

        }catch(error){
            console.log(error);
            res.status(500).json({message: "Erro no servidor"})
        }
    })

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  })
}

export default app;



