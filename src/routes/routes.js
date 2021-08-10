const router = require('express').Router()

const ProductController = require('../controllers/products')

/*
  VERBOS HTTP (4 TIPOS)
  GET - obter dados
  POST - enviar/receber dados
  PUT - atualizar dados
  DELETE - remover dados

*/

router.get('/products/:id?', ProductController.get) // Usa '?' para indicar que o parametro (:id) é opcional
router.post('/products', ProductController.post)
// router.put('/products/:id', ProductController.put)
// router.delete('/products/:id', productsontroller.delete)

module.exports = router
