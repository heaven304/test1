import mongoose from "mongoose";

const connectDB = () => {

    mongoose.connect('mongodb+srv://heaven:hevan%401571999@ecommerce.8vvthdz.mongodb.net/')
        .then(() => console.log('Connected!'));
}

export default connectDB