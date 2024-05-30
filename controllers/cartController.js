
const Cart = require('../models/cartSchema');
const product=require('../models/productSchema');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const jwt = require('jsonwebtoken');


// Add to cart => /customer/cart/add-product
exports.addTocart = catchAsyncErrors(async (req, res, next) => {
    // Get user ID from the token
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).json({ success: false, message: "Token is required" });
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify and decode the token
        console.log("Decoded Token:", decoded);
    } catch (error) {
        console.error("Token Verification Error:", error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }

    const userId = decoded.id; // Extract the user ID from the decoded token

    if (!userId) {
        console.error("User ID not found in token.");
        return res.status(401).json({ success: false, message: "User ID not found in token" });
    }

    console.log("User ID:", userId);

    let cartItems = req.body.cartItems;
    console.log("Cart items received from frontend:", cartItems);

    // Find the cart for the user
    let cart = await Cart.findOne({ user: userId });

    console.log("Existing cart:", cart);

    if (cart) {
        // Ensure cartItems is an array
        if (!Array.isArray(cartItems)) {
            cartItems = [cartItems];
        }

        // Push new items to cartItems array
        cartItems.forEach(item => {
            cart.cartItems.push({
                product: item.product,
                
            });
        });

        // Save the cart
        try {
            await cart.save();
            console.log('Cart updated successfully:', cart);
            res.status(200).json({ success: true, length: cart.cartItems.length });
        } catch (error) {
            console.error('Error saving updated cart:', error);
            res.status(500).json({ success: false, message: "Error updating cart" });
        }
    } else {
        console.log("No existing cart found, creating a new cart.");

        // Create a new cart if it doesn't exist for the user
        const newCart = new Cart({
            user: userId,  // Assign the userId to the user field
            cartItems: cartItems.map(item => ({
                product: item.product,
                price: item.price
            }))
        });

        try {
            await newCart.save();
            console.log('New cart created successfully:', newCart);
            res.status(200).json({ success: true, length: newCart.cartItems.length });
        } catch (error) {
            console.error('Error saving new cart:', error);
            res.status(500).json({ success: false, message: "Error creating cart" });
        }
    }
});


// Get cart items => /customer/cart
exports.getCartItems = catchAsyncErrors(async (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).json({ success: false, message: "Token is required" });
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify and decode the token
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }

    const userId = decoded.id; // Extract the user ID from the decoded token

     // Find the cart for the user
     let cart = await Cart.findOne({ user: userId });

     let cartItems = [];
     if (cart) {
         // Populate the product details for each cart item
         cartItems = await Promise.all(cart.cartItems.map(async (item) => {
             let productDetails = await product.findById(item.product);
             return {
                productDetails,
                 
             };
         }));
     }

     console.log(cartItems)
 
     res.status(200).json({ success: true, cartItems });
 });





// Delete cart item => /customer/cart/remove-product
exports.deleteCartItem = catchAsyncErrors(async (req, res, next) => {
    // Get user ID from the token
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).json({ success: false, message: "Token is required" });
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify and decode the token
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }

    const userId = decoded.id; // Extract the user ID from the decoded token

    // Find the cart for the user
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
        return res.status(404).json({ success: false, message: "Cart not found" });
    }

    const productId = req.body.productId;
    console.log("in remove product");
    console.log(productId);

    // Find the index of the product in the cartItems array
    const index = cart.cartItems.findIndex(item => item.product.toString() === productId.toString());
    if (index === -1) {
        return res.status(404).json({ success: false, message: "Product not found in cart" });
    }

    // Remove the product from the cartItems array
    cart.cartItems.splice(index, 1);

    // Save the updated cart
    await cart.save();

    res.status(200).json({ success: true, length: cart.cartItems.length });
});
