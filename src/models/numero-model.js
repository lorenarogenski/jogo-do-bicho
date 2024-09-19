const db = require('../db.js')

const Schema = db.Schema

const numeroSchema = new Schema({
    numero: {
        type: Schema.Types.Number,
        required: true
    },
    bicho: {
        type: Schema.Types.ObjectId,
        ref: 'Bicho'
    }
});

const Numero = db.model('Numero', numeroSchema)

module.exports = Numero