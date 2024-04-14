import mongoose from "mongoose";

// Replace this with your MongoDB connection string
const mongoDBConnectionString =process.env.MONGODB_URL
  

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(mongoDBConnectionString, {
      useUnifiedTopology: true,
    });
   
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
