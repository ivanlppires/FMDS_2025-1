import express from 'express'

// Importa o controller
import UsersController from '../controllers/UsersController.js'

const router = express.Router()

// Cria as rotas
router.post('/', UsersController.createUser) // Cria um usuário
router.get('/', UsersController.getAllUsers) // Lista todos os usuários
router.get('/:id', UsersController.getUserById) // Busca um usuário pelo parâmetro id
router.put('/:id', UsersController.updateUser) // Atualiza um usuário pelo parâmetro id
router.delete('/:id', UsersController.deleteUser) // Deleta um usuário pelo parâmetro id

// Exporta o router
export default router