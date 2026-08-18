import { Router } from "express";   // Importa o Router do Express
const endpoints = Router();         // Cria a variável para adicionar os Endpoints


endpoints.get('/health', (req, resp) => {

    resp.send({
        mensagem: 'API no AR'
    })
})



// Exporta as rotas
export default endpoints; 