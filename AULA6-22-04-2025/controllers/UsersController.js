// Users Controller

// USERS CRUD

const createUser =  (req, res) => {
    console.log(req.body.nome)
    return res.status(200).json({
        message: 'Usuário cadastrado com sucesso',
    })
}
const getAllUsers = (req, res) => {
    return res.status(200).json({
        message: 'Lista de usuários',
    })
}
const getUserById = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: `Usuário ${id} encontrado`,
    })
}
const updateUser = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: `Usuário ${id} atualizado com sucesso`,
    })
}
const deleteUser = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: `Usuário ${id} deletado com sucesso`,
    })
}
// Exporta os controllers
export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}