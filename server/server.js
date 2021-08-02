const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors')
const path = require('path');
require('dotenv').config();

const globalConfigs = require('./app/routes/globalConfigs');
const customers = require('./app/routes/customers');
const catalog = require('./app/routes/catalog');
const products = require('./app/routes/products');
const colors = require('./app/routes/colors');
const sizes = require('./app/routes/sizes');
const filters = require('./app/routes/filters');
const subscribers = require('./app/routes/subscribers');
const cart = require('./app/routes/cart');
const orders = require('./app/routes/orders');
const links = require('./app/routes/links');
const pages = require('./app/routes/pages');
const slides = require('./app/routes/slides');
const wishlist = require('./app/routes/wishlist');
const comments = require('./app/routes/comments');
const shippingMethods = require('./app/routes/shippingMethods');
const paymentMethods = require('./app/routes/paymentMethods');
const partners = require('./app/routes/partners');
const mainRoute = require('./app/routes/index');

const app = express();

const port = process.env.PORT || 8080;

app.use(cors())

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// DB Config
const db = require('./app/config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB has connected successfully');
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./app/config/passport')(passport);

app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/api/configs', globalConfigs);
app.use('/api/customers', customers);
app.use('/api/catalog', catalog);
app.use('/api/products', products);
app.use('/api/colors', colors);
app.use('/api/sizes', sizes);
app.use('/api/filters', filters);
app.use('/api/subscribers', subscribers);
app.use('/api/cart', cart);
app.use('/api/orders', orders);
app.use('/api/links', links);
app.use('/api/pages', pages);
app.use('/api/slides', slides);
app.use('/api/wishlist', wishlist);
app.use('/api/comments', comments);
app.use('/api/shipping-methods', shippingMethods);
app.use('/api/payment-methods', paymentMethods);
app.use('/api/partners', partners);
app.use('/', mainRoute);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
