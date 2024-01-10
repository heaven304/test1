import express from 'express'
import userRouter from './routes/user.js'
import productRouter from './routes/product.js'
import connectDB from './connectdb/connectdb.js'
import 'dotenv/config'
const app = express()
app.use(express.json())

const url = process.env.DATABASE_URL

connectDB(url)
app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(8080, () => {
    console.log('server is runnig on http://localhost:8080')
})