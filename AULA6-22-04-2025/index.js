// importa o frameworks express
import express from 'express'
import UsersRoute from './routes/UsersRoute.js' // importa as rotas de usuários
import ProductsRoute from './routes/ProductsRoute.js' // importa as rotas de produtos

// faz uma instancia do fw e salva em app
const app = express(); 

// Middlewares
app.use(express.json()) // transforma o body <-> json (parser)

// Routes
app.use('/users', UsersRoute) // usa as rotas de usuários
app.use('/products', ProductsRoute) // usa as rotas de produtos

// Rota para tratar qualquer outra rota não definida
app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' })
})

// configura um listen para trabalhar em uma porta
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
})

