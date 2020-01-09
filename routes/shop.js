const path = require('path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    //res.send('<h1>Hello from Shop !</h1>');
    res.render('shop', {
        products: adminData.products,
        pageTitle: 'Welcome to our eshop',
        path: '/'
    });
    
});
module.exports = router;