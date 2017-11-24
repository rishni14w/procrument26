var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Product = require('./models/product');
Order = require('./models/order');
Requisition = require('./models/requisition');
Login = require('./models/login');

//connect to mongoose
// mongoose.connect('mongodb://localhost/procrument');
//mongoose.connection.openUri('mongodb://127.0.0.1/procrument');
//mongoose.connect('mongodb://csse_26:csse_26sysr@ds117336.mlab.com:17336/procrument26');
//database object
mongoose.Promise = global.Promise
mongoose.connect('mongodb://csse_26:csse_26sysr@ds117336.mlab.com:17336/procrument26', { useMongoClient: true });



//mongoose.connect('mongodb://csse_26:csse_26sysr@ds117336.mlab.com:17336/procrument26');
var db = mongoose.connection;

app.get('/',function(req,res){
    res.send('Please use /api/products');
});

//--products--

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

//put product
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

//delete product
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

//--requisition--

//get requisitions
app.get('/api/requisitions',function (req,res) {
    Requisition.getRequisitions(function (err,requisitions) {
        if(err)
        {
            throw err;
        }
        res.json(requisitions);
    });
});

//get requisition by id
app.get('/api/requisitions/:_id',function (req,res) {
    Requisition.getRequisitionById(req.params._id,function (err,requisition) {
        if(err)
        {
            throw err;
        }
        res.json(requisition);
    });
});

//post requisition
app.post('/api/requisitions',function(req,res){
    var requisition = req.body;
    Requisition.addRequisition(requisition, function (err,requisition) {
        if(err)
        {
            throw err;
        }
        res.json(requisition);
    });
});

//put requisition
app.put('/api/requisitions/:_id',function(req,res){
    var id=req.params._id;
    var requisition = req.body;
    Requisition.updateRequisition(id,requisition,{}, function (err,requisition) {
        if(err)
        {
            throw err;
        }
        res.json(requisition);
    });
});

//delete requisition
app.delete('/api/requisitions/:_id',function(req,res){
    var id=req.params._id;
    Requisition.deleteRequisition(id,function (err,requisition) {
        if(err)
        {
            throw err;
        }
        res.json(requisition);
    });
});

//---sewmi----
//Approve-Orders
app.put('/api/orders/details/:_id',function(req,res){
    var id=req.params._id;
    var requisition = req.body;
    Requisition.acceptRequisition(id,requisition,{}, function (err,requisition) {
        if(err)
        {
            throw err;
        }
        res.json(requisition);
    });
});

app.put('/api/orders/detail/:_id',function(req,res){
    var id=req.params._id;
    var requisition = req.body;
    Requisition.rejectRequisition(id,requisition,{}, function (err,requisition) {
        if(err)
        {
            throw err;
        }
        res.json(requisition);
    });
});



app.listen(3000);
console.log('running on port 3000...');
