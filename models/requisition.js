var mongoose = require ('mongoose');

//Requisition Schema
var requisitionSchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    quantity:{
        type:String,
        required:true
    },
    supplier:{
        type:String
    },
    requiredDate:{
        type:String
    },
    approver:{
        type:String
    },
    status:{
        type:String,
        default:'Pending'
    },
    create_date:{
        type:Date,
        default:Date.now()
    }
});

var Requisition = module.exports =mongoose.model('Requisition',requisitionSchema);

//get Requisitions
module.exports.getRequisitions = function (callback,limit) {
    Requisition.find(callback).limit(limit);
};

//get Requisition by id
module.exports.getRequisitionById = function (id,callback) {
    Requisition.findById(id,callback);
};

//add Requisition
module.exports.addRequisition = function (requisition,callback) {
    Requisition.create(requisition,callback);
};


//update Requisition
module.exports.updateRequisition = function (id,requisition,options,callback) {
    var query={_id:id};
    var update={
        category: requisition.category,
        product: requisition.product,
        description: requisition.description,
        quantity: requisition.quantity,
        supplier: requisition.supplier,
        requiredDate: requisition.requiredDate,
        approver: requisition.approver
    };
    Requisition.findOneAndUpdate(query,update,options,callback);
};

//delete Requisition
module.exports.deleteRequisition = function (id,callback) {
    var query={_id:id};
    Requisition.remove(query,callback);
};
