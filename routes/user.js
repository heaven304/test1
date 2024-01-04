import express from 'express'

const userRouter = express.Router()

userRouter.get('/get', (req, res) => {


    let data = [{ name: 'biren' }]

    res.send(data)

})

userRouter.post('/add', (req, res) => {
    res.send('add success')
})

userRouter.put('/update', (req, res) => {
    res.send('update success')
})

userRouter.delete('/delete', (req, res) => {
    res.send('delete success')
})

export default userRouter