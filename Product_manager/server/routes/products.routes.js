const ProductController = require('../controllers/products.controller');
module.exports = (app) => {
    app.get('/api/products', ProductController.findAllproducts);
    app.post('/api/products/new', ProductController.createNewProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);


}