import express from 'express'
import fg from './routes/user.js'
import productRouter from './routes/product.js'
import connectDB from './connectdb/connectdb.js'

const app = express()
connectDB()
app.use('/user', fg )
app.use('/product', productRouter)

app.listen(8080, () => {
    console.log('server is runnig on http://localhost:8080')
})