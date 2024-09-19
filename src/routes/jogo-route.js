const express = require('express')
const router = express.Router()

const jogo_router = require('../controllers/jogo-controller.js')

router.post('/', jogo_controller.store)
router.get('/', jogo_controller.index)
router.get('/', jogo_controller.show)
router.put('/', jogo_controller.update)
router.delete('/', jogo_controller.destroy)

module.exports = router