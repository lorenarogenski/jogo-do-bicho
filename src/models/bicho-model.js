const db = require('../db.js')

const Schema = db.Schema

const bichoSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true
    },
    numeros: [{
        type: [Schema.Types.Number],
        validate: function(v) {
            return v.lenght == 4 && v.every(n => n => 0 && n < 100)
        }
    }]
});

const Bicho = db.model('Bicho', bichoSchema)

module.exports = Bicho 