import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    age: { type: Number, min: 18 },
    status: { type: Boolean, default: 1 }
})

const userModal = mongoose.model('user', userSchema)



const addData = (data) => {
    try {
        const userDoc = new userModal(data)

        const result = userDoc.save()
        return result
    } catch (err) {
        console.log(err)
        return err
    }
}


const getdata = async () => {
    try {
        const result = await userModal.find()
        return result

    } catch (err) {
        console.log(err)
        return err
    }
}

export { addData, getdata }