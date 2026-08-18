// Importa os endpoints de Health, Welcome e Calculus da API
import health from '../src/controller/healthController.js'     
import escola from '../src/controller/escolaController.js'
import outros from '../src/controller/outrosController.js'
import welcome from '../src/controller/welcomeController.js'   
import trigonometria from '../src/controller/trigonometriaController.js'
import calculus from '../src/controller/calculusController.js';


export function addRoutes(api) {    // Registra as rotas na aplicação
  api.use(health);           // Adiciona as rotas de saúde
  api.use(welcome);          // Adiciona as rotas de boas-vindas
  api.use(escola);           // Adiciona as rotas de escola
  api.use(trigonometria);    // Adiciona as rotas de trigonometria
  api.use(calculus);  
  api.use(outros);           // Adiciona outras rotas
}