import express from 'express'
import { addData, getdata } from '../crud/userdata.js'

const userRouter = express.Router()

userRouter.get('/get', async (req, res) => {


    const data = await getdata()

    res.send(data)

})

userRouter.post('/add', async (req, res) => {

    const data = await addData(req.body)
    res.send(data)
})

userRouter.put('/update', (req, res) => {
    res.send('update success')
})

userRouter.delete('/delete', (req, res) => {
    res.send('delete success')
})

export default userRouter