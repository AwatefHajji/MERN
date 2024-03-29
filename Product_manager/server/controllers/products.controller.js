const Product = require('../models/products.model'); // importing the product variable that we exported from the products.model.js file.
//export different functions that perform the basic CRUD operations using our Product model
const mongoose = require('mongoose');
// function get all products
module.exports.findAllproducts = (req, res) => {
    Product.find({})
        .then(allproducts => res.json(allproducts))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// create a new product

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
       .then(newlyProduct => res.json({ product: newlyProduct }))
       .catch(err => res.json({ message: 'Something went wrong IN CREATE', error: err }));
}

// find one product

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
       .then(product => res.json(product))
       .catch(err => res.json({ message: 'Something went wrong on reading one product', error: err }));
}

// update a product

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body)
      .then(updatedProduct => res.json({ product: updatedProduct }))
      .catch(err => res.json({ message: 'Something went wrong on updating one product', error: err }));
}

// delete a product

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({_id:req.params.id})
     .then(deletedProduct => res.json({ product: deletedProduct }))
     .catch(err => res.json({ message: 'Something went wrong on deleting one product', error: err }));
}