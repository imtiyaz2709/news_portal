import mongoose from "mongoose";

const connectDb = async (req,res) =>{
    if(mongoose.connections[0].readyState){
        return mongoose.connection;
    }
    return await mongoose.connect(process.local.MONGO_URL)
}

export default connectDb