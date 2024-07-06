export const fetchCartData = async () => {
    const response = await fetch('/api/cart');
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
    const data = await response.json();
    return data;
};

export const removeItemFromCart = async (itemId) => {
    const response = await fetch(`/api/cart/${itemId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
};
