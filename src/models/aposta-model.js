const db = require('../db.js')

const Schema = db.Schema


const bichoSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true
    },
    numeros: [{
        type: [Schema.Types.Number],
        min: 0,
        max: 99,
        validate: function(v) {
            return v.lenght == 4 && v.every(n => n => 0 && n < 100)
        }
    }]
});

const apostaSchema = new Schema({
    valor: {
        type: Schema.Types.Number,
        min: 0,
        required: true
    },
    retorno: {
        type: Schema.Types.Number,
        required: false,
        default: 0,
    },
    bichos: {
        type: [Schema.Types.ObjectId],
        ref: "Bicho",
        validate(v) {
            return v.length <= 5
        },
        required: true
    },
    chavePix: {
        type: Schema.Types.String,
        required: true
    },
    jogo: {
        type: Schema.Types.ObjectId,
        ref: "Jogo"
    }
});

const Aposta = db.model('Aposta', apostaSchema)

module.exports = Aposta
