var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Product = require('./models/product');
Order = require('./models/order');
//connect to mongoose
// mongoose.connect('mongodb://localhost/procrument');
mongoose.connection.openUri('mongodb://127.0.0.1/procrument');
//MongoClient.connect('mongodb://csse_26:csse_26sysr@ds117336.mlab.com:17336/procrument26');
//database object
var db = mongoose.connection;

app.get('/',function(req,res){
    res.send('Please use /api/products');
});



//get products
app.get('/api/products',function (req,res) {
    Product.getProducts(function (err,products) {
        if(err)
        {
            throw err;
        }
        res.json(products);
    });
});

//get product by id
app.get('/api/products/:_id',function (req,res) {
    Product.getProductById(req.params._id,function (err,product) {
        if(err)
        {
            throw err;
        }
        res.json(product);
    });
});

//post product
app.post('/api/products',function(req,res){
    var product = req.body;
    Product.addProduct(product, function (err,product) {
        if(err)
        {
            throw err;
        }
        res.json(product);
    });
});

//put book
app.put('/api/products/:_id',function(req,res){
    var id=req.params._id;
    var product = req.body;
    Product.updateProduct(id,product,{}, function (err,product) {
        if(err)
        {
            throw err;
        }
        res.json(product);
    });
});

//delete book
app.delete('/api/products/:_id',function(req,res){
    var id=req.params._id;
    Product.deleteProduct(id,function (err,product) {
        if(err)
        {
            throw err;
        }
        res.json(product);
    });
});

app.listen(3000);
console.log('running on port 3000...');
