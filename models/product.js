var mongoose = require ('mongoose');

//Product Schema
var productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:String,
        required:false
    },
    rate:{
        type:String
    },
    supplier:{
        type:String
    },
    image_url:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now()
    }
});

var Product = module.exports =mongoose.model('Product',productSchema);

//get Products
module.exports.getProducts = function (callback,limit) {
    Product.find(callback).limit(limit);
};

//get Product by id
module.exports.getProductById = function (id,callback) {
    Product.findById(id,callback);
};

//add Product
module.exports.addProduct = function (product,callback) {
    Product.create(product,callback);
};


//update Product
module.exports.updateProduct = function (id,product,options,callback) {
    var query={_id:id};
    var update={
        name: product.name,
        category: product.category,
        description: product.description,
        price: product.price,
        rate: product.rate,
        supplier: product.supplier,
        image_url: product.image_url
    };
    Product.findOneAndUpdate(query,update,options,callback);
};

//delete Product
module.exports.deleteProduct = function (id,callback) {
    var query={_id:id};
    Product.remove(query,callback);
};
