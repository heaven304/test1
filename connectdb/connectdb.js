import mongoose from "mongoose";

const connectDB = (url) => {

    mongoose.connect(url)
        .then(() => console.log('Connected!'));
}

export default connectDB