import express from 'express'

const productRouter = express.Router()

productRouter.get('/get', (req, res) => {
    res.send('get product success')

})

productRouter.post('/add', (req, res) => {
    res.send('add product success')
})

productRouter.put('/update', (req, res) => {
    res.send('update product success')
})

productRouter.delete('/delete', (req, res) => {
    res.send('delete product success')
})

export default productRouter