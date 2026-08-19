import { Router } from "express";
const endpoints = Router();


endpoints.get('/areaQuadrado', (req, resp) => {
    let lado = Number(req.query.lado);

    let area = lado * lado;
    resp.send ({

        resposta: area

    })

    // TODO: calcular área do quadrado
})


endpoints.get('/areaRetangulo/:largura/:altura', (req, resp) => {
    let largura = Number(req.params.largura);
    let altura = Number(req.params.altura);

    let area = largura * altura
    resp.send ({
        
        resposta: `A area do retangulo é ${area}`

    })
})


endpoints.post('/areaTriangulo', (req, resp) => {
    let corpo = req.body;

    let base = corpo.base;
    let altura = corpo.altura;

    let conta = base * altura;
    let area = conta / 2
    resp.send ({

        resposta: area

    })
})


export default endpoints;
