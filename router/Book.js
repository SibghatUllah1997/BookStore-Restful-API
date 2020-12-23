const Router = require('express').Router();
const {Book , validate  } = require('../model/book');
const bodyparser = require('body-parser');
const bookController =  require('../controller/Book');


Router.get('/', bookController.getAllProducts);


Router.post('/', bookController.postProduct);

 Router.put('/:id', bookController.updateBook);


 Router.delete('/:id', bookController.deleteBook);
 

 Router.get('/:id' , bookController.getById);
 module.exports = Router;
