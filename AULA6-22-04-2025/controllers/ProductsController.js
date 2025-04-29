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

const getAllProducts = async (req, res) => {
    const { error, data } = await supabase.from('products').select('*');
    if (!error) return res.status(200).json(data)
    return res.status(400).json({
        message: 'Erro ao buscar produtos',
    })
}
const getProductById = async (req, res) => {
    const { id } = req.params
    const { error, data } = await supabase.from('products').select('*').eq('id', id);
    if (!error) return res.status(200).json(data)
    return res.status(400).json({
        message: 'Erro ao buscar o produto',
    })
}
const updateProduct = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const { error } = await supabase.from('products').update(data).eq('id', id);
    if (!error) {
        return res.status(200).json({
            message: 'Produto atualizado com sucesso',
        })
    } else {
        return res.status(400).json({
            message: 'Erro ao atualizar produto',
        })
    }
}
const deleteProduct = async (req, res) => {
    const { id } = req.params
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) {
        return res.status(200).json({
            message: 'Produto deletado com sucesso',
        })
    } else {
        return res.status(400).json({
            message: 'Erro ao deletar produto',
        })
    }
}
// Exporta os controllers
export default {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}
