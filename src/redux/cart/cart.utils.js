export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); //check if item already exists in cart items arry
    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}