var mongoose = require ('mongoose');

//order Schema
var OrderSchema = mongoose.Schema({
    orderid:{
        type:String,
        required:true
    },
    createdDate:{
        type:String,
        required:true
    },

    deliveryAddress:{
        type:String,
        required:true
    },
    item:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    requiredDate:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
});

var Order = module.exports =mongoose.model('Order',OrderSchema);

//get Orders
module.exports.getOrder = function (callback,limit) {
    Order.find(callback).limit(limit);
};

//get order by id
module.exports.getOrderById = function (id,callback) {
    Order.findById(id,callback);
};

//add orders
module.exports.addOrder = function (order,callback) {
    Order.create(order,callback);
};



//delete Order
module.exports.deleteOrder = function (id,callback) {
    var query={_id:id};
    Order.remove(query,callback);
};
