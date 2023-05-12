const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'foto1',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'Foto2',
        minibio: 'Fundadora da Programaria'
    },
    {
        nome: 'Munique Parreira',
        imagem: 'Foto3',
        minibio: 'Estudante da Programaria'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)