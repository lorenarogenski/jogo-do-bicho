const Jogo = require('../models/jogo-model.js')
const Bicho = require('../models/bicho-model.js')
const Numero = require('../models/numero-model.js')

class JogoController {
    constructor() {
        this.jogos = [];
    }

    criarJogo(req, res) {
        const {dataInicio, dataFim} = req.body;
        const jogo = new Jogo(dataInicio, dataFim);
        this.jogos.push(jogo);
        res.status(201).json(jogo);
    }

    gerarNumeros() {
        const numerosEscolhidos = []
        for(let i = 0; i < 5; i++) {
            
        }
    }
}