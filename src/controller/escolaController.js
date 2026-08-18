import { Router } from "express";
const endpoints = Router();



endpoints.post('/media', (req, resp) => {
    let corpo = req.body;

    let media = (corpo.n1 + corpo.n2 + corpo.n3) / 3;

    resp.send({
        media: media,
        situacao: verificarSituacao(media)
    })
})


endpoints.post('/mediaVetor', (req, resp) => {
    let corpo = req.body;

    let notas = corpo.notas;

    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    let media = soma / notas.length;

    resp.send({
        media: media,
        situacao: verificarSituacao(media)
    })
})


endpoints.post('/mediaAlunos', (req, resp) => {
    let corpo = req.body;

    let alunos = corpo.alunos;

    let resultado = [];
    for (let aluno of alunos) {
        let media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;

        resultado.push({
            nome: aluno.nome,
            media: media,
            situacao: verificarSituacao(media)
        })
    }

    resp.send(resultado)
})



function verificarSituacao(media) {
    if (media >=6) {

        console.log('Aprovado')

    }

    else {

        console.log ('Aluno reprovado')

    }

}




export default endpoints;
