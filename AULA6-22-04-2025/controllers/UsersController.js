// Users Controller
import supabase from '../database/supabase.js'

// USERS CRUD

const createUser = async (req, res) => {
    const { name } = req.body
    console.log(name)
    const { error } = await supabase.from('users').insert({ name })
    if (!error) {
        return res.status(201).json({
            message: 'Usuário criado com sucesso',
        })
    }
    return res.status(400).json({
        message: 'Erro ao criar usuário',
    })
}
const getAllUsers = async (req, res) => {
    const { error, data } = await supabase.from('users').select('*');
    if (!error) return res.status(200).json(data);
    return res.status(400).json({
        message: 'Erro ao buscar usuários',
    })
}
const getUserById = async (req, res) => {
    const { id } = req.params
    const { error, data } = await supabase.from('users').select('*').eq('id', id)
    if (!error) return res.status(200).json(data);
    return res.status(400).json({
        message: 'Erro ao buscar usuários',
    })
}
const updateUser = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const { error } = await supabase.from('users').update(data).eq('id', id)
    if (!error) {
        return res.status(200).json({
            message: 'Usuário atualizado com sucesso',
        })
    }
    return res.status(400).json({
        message: 'Erro ao atualizar usuário',
    })
}
const deleteUser = async (req, res) => {
    const { id } = req.params
    await supabase.from('users').delete().eq('id', id)
    const { error } = await supabase.from('users').delete().eq('id', id)
    if (!error) {
        return res.status(200).json({
            message: 'Usuário deletado com sucesso',
        })
    }
    return res.status(400).json({
        message: 'Erro ao deletar usuário',
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