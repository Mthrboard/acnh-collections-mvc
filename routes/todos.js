const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/addDivId', todosController.addDivId)

/* router.put('/addDivId', todosController.markComplete) */

router.post('/removeDivId', todosController.removeDivId)

/* router.delete('/deleteTodo', todosController.deleteTodo) */

module.exports = router