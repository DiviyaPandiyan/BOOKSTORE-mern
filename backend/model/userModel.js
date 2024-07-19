// import mongoose from "mongoose";

// const bookSchema = mongoose.Schema(
//     {
//         title:{
//             type:String,
//             required:true
//         },
//         auther:{
//             type:String,
//             required:true
//         },
//         publishYear:{
//             types:String,
//             required:true
//         },
//         timestamps:{
//             timestamps:true,
//         }

//     }
// )

// export const Book = mongoose.model('Book', bookSchema);

import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);

