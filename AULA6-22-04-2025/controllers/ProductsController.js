import supabase from '../database/supabase.js'

// Products Controller

// PRODUCTS CRUD
const createProduct = async (req, res) => {
    const data = req.body
    const { error } = await supabase.from('products').insert(data);
    if (!error) {
        return res.status(200).json({
            message: 'Produto cadastrado com sucesso',
        })
    } else {
        return res.status(400).json({
            message: 'Erro ao cadastrar produto',
        })
    }
}

const getAllProducts = (req, res) => {
    return res.status(200).json({
        message: 'Lista de produtos',
    })
}
const getProductById = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: `Produto ${id} encontrado`,
    })
}
const updateProduct = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: `Produto ${id} atualizado com sucesso`,
    })
}
const deleteProduct = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: `Produto ${id} deletado com sucesso`,
    })
}
// Exporta os controllers
export default {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}
