import mongoose from "mongoose";

const connectDB = () => {

    mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
        .then(() => console.log('Connected!'));
}

export default connectDB