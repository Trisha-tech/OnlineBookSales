
const Cart = require('../models/cartSchema');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


// Add to cart => /customer/cart/add-product
exports.addTocart = catchAsyncErrors(async (req, res, next) => {
    let  cartItems  = req.body.cartItems;
    const userId=req.body.user._id ;
    
    let cart = await Cart.findOne({ user:userId});
    if (cart) {
        // Ensure cartItems is an array
        if (!Array.isArray(cartItems)) {
            cartItems = [cartItems];
        }
        // Push new items to cartItems array
        cart.cartItems.push(...cartItems);
        // Save the cart
        await cart.save();
        // Send response
        res.status(200).json({ success: true, length: cart.cartItems.length });
    }else {
        const newCart = await Cart.create({
            user: userId,
            cartItems,
        });
        res.status(200).json({ success: true,length:newCart.cartItems.length });
    }
});


// Get cart items => /customer/cart
exports.getCartItems = catchAsyncErrors(async (req, res, next) => {
    const cart = await Cart.findOne({ user: req.body.user._id });
    let cartItems =[];
    if(cart){
        cartItems = cart.cartItems;
    }
    res.status(200).json({ success: true, cartItems });
}
);  //getCartItems



// Delete cart item => /customer/cart/remove-product
exports.deleteCartItem = catchAsyncErrors(async (req, res, next) => {
    const cart = await Cart.findOne({ user: req.body.user._id });
    const productId=req.body.productId;
    const cartItems = cart.cartItems;
    const index = cartItems.findIndex(item => item.product.toString() === productId.toString());
    cartItems.splice(index, 1);
    await cart.save();
    res.status(200).json({ success: true,length:cart.cartItems.length });
});//deleteCartItem