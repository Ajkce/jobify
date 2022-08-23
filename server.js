import express from "express";
const app = express();
const port = process.env.PORT;
const PORT = port || 5000;
import dotenv from "dotenv";
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan'

//middleware
import notFoundMiddleware from "./middleware/notfoundMiddleware.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

//db
import connectDB from "./db/connect.js";


//router
import authRoute from './routes/authRoute.js'
import jobsRoute from './routes/jobRoutes.js'


if(process.env.NODE_ENV !== 'production' ){
  app.use(morgan('dev'))
}
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send({message: "hello"});
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/jobs', jobsRoute);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`The server is listening on port ${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
