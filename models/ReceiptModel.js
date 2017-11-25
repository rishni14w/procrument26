var mongoose = require ('mongoose');

//GoodsReceipt Schema
var goodsReceiptSchema = mongoose.Schema({

    orderID : {
        type:String,
        required:false
    },
    product:{
        type: String,
        required: true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    supplier:{
        type:String
    },
    status:{
        type:String,
        default:"Pending"
    },
    deliveredqty:{
        type:String,
        required:false
    },
    remainingqty:{
        type:String,
        required:false
    },
    toPay:{
        type:String,
        required:false
    }
});

var receipt = module.exports =mongoose.model('receipt',goodsReceiptSchema);

/*
//get the orders
module.exports.getorders = function (callback,limit) {
    receipt.find(callback).limit(limit);
};

//get order by id
module.exports.getOrderById = function (id,callback) {
    receipt.findById(id,callback);
};

//The approval status added
module.exports.approveReceipt = function (product,callback) {
    receipt.create(product,callback);
};

*/
