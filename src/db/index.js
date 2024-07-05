import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectdb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`, // Use backticks for template literals
      // {
      //   mongoose.connect("mongodb://localhost:27017/DB_NAME", { useNewUrlParser: true });
      //   useUnifiedTopology: true,
      // }
    );
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error); // Use console.error for errors
    process.exit(1);
  }
};

export default connectdb;





// import mongoose from "mongoose";
// import { DB_NAME } from '../constants.js'

// const connectdb = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       "${process.env.MONGODB_URI}/${DB_NAME}"
//     );
//     console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
//   } catch (error) {
//     console.log("Mongodb connection error:", error);
//     process.exit(1);
//   }
// };

// export default connectdb;
