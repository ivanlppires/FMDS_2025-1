import express from 'express'

// Importa o controller
import ProductsController from '../controllers/ProductsController.js'

const router = express.Router()

// Cria as rotas
router.post('/', ProductsController.createProduct) // Cria um produto
router.get('/', ProductsController.getAllProducts) // Lista todos os produtos
router.get('/:id', ProductsController.getProductById) // Busca um produto pelo parâmetro id
router.put('/:id', ProductsController.updateProduct) // Atualiza um produto pelo parâmetro id
router.delete('/:id', ProductsController.deleteProduct) // Deleta um produto pelo parâmetro id

// Exporta o router
export default router