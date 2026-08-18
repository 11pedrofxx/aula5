import { Router } from "express";
const endpoints = Router();


endpoints.get('/somar', (req, resp) => {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);

    let s = n1 + n2;

    resp.send({
        resposta: s
    })
})


endpoints.get('/subtrair/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let sub = n1 - n2;

    resp.send({
        resposta: sub
    })
})


endpoints.post('/multiplicar', (req, resp) => {
    let corpo = req.body;

    let mult = corpo.n1 * corpo.n2;

    resp.send({
        resposta: mult
    })

})


endpoints.get('/dividir/:n1/', (req, resp) => {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);

    if (n2 === 0) {
        return resp.status(400).send({
            erro: "Não é possível dividir por zero"
        })
    }

    let div = n1 / n2;

    resp.send({
        resposta: div
    })
})

export default endpoints;