const mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    StaffID: String,
    ItemsList: String,
    Total: String
} , { collection: 'order' } );

var Order = mongoose.model('order', orderSchema);

module.exports = {
    order : Order,
    schema : orderSchema
} ;