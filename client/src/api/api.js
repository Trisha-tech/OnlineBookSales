export const fetchCartData = async () => {
    const response = await fetch('/api/cart');
    if (!response.ok) {
        throw new Error(`Failed to fetch cart data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
};

export const addItemToCart = async (item) => {
    const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    if (!response.ok) {
        throw new Error(`Failed to add item to cart: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
};

export const removeItemFromCart = async (itemId) => {
    const response = await fetch(`/api/cart/${itemId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Failed to remove item from cart: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
};
