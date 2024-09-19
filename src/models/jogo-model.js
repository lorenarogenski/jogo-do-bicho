const db = require('../db.js')

const Schema = db.Schema

const jogoSchema = new Schema({
    numeroEscolhido: [{
        type: Schema.Types.Number,
        required: false,
        min: 0,
        max: 99
    }],
    // vencedores: [{
    //     type: Schema.Types.ObjectId,
    //     required: "Aposta"
    // }],
    dataInicio: {
        type: Schema.Types.Date,
        required: true
    },
    dataFim: {
        type: Schema.Types.Date,
        required: true
    }
});

const Jogo = db.model('Jogo', jogoSchema)

module.exports = Jogo