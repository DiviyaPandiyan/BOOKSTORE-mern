import express, { request, response } from 'express';
import {PORT,MONGODB_URL} from "./config.js";
import mongoose from 'mongoose';
import booksRout from './routes/booksRoute.js';
// import cros from  'cros';


const app =express();
app.use(express.json());

// Middleware for handling CORS POLICY
// app.use(cors());
// Option 1: Allow All Origins with Default of cors(*)
// app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       methods: ['GET', 'POST', 'PUT', 'DELETE'],
//       allowedHeaders: ['Content-Type'],
//     }));
app.use('/books',booksRout);


mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });