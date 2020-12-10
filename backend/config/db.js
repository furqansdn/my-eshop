import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const URL = process.env.DATABASE_URL.replace(
      '<username>',
      process.env.DATABASE_USER
    ).replace('<password>', process.env.DATABASE_PASSWORD);

    const conn = await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
