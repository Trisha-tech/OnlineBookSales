const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer',
        required: true
    },
    cartItems: {
        type: [{
            product: {
                type: mongoose.Schema.ObjectId,
                ref: 'Product',
                required: [true, 'Please Enter Product']
            },
            
            
        }],
        default: []
    }
});

module.exports = mongoose.model('Cart', cartSchema);
