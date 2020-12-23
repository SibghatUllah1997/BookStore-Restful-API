const mongoose = require('mongoose');
const Joi = require('joi');
const { shallowClone } = require('mongodb/lib/utils');

const Book = mongoose.model('Books' , mongoose.Schema({
name:{
    type : String,
    required : true,
    minlenght : 5,
    maxlength : 50
}
}));
//  function validateBooks(book){

//     const schema = {
//         name : Joi.string().min(2).required()
//     };
//     return Joi.validate(book , schema);
    

//  }
// module.exports.validate = validateBooks;
module.exports.bookSchema = Book
module.exports.Book = Book;