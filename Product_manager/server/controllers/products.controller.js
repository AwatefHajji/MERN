const Product = require('../models/products.model'); // importing the product variable that we exported from the products.model.js file.
//export different functions that perform the basic CRUD operations using our Product model
const mongoose = require('mongoose');
// function get all products
module.exports.findAllproducts = (req, res) => {
    Product.find()
        .then(allproducts => res.json({ All_Products: allproducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// create a new product

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
       .then(newlyProduct => res.json({ product: newlyProduct }))
       .catch(err => res.json({ message: 'Something went wrong IN CREATE', error: err }));
}