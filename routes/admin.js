const path = require('path');
const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    //res.send('<h1>Add product !</h1>');
    //res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/'
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;