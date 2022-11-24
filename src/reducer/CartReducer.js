const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        console.log(product);
        
        let cartProduct;

        cartProduct = {
            id: id + color,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        }
    }



    return {
        ...state,
        cart: [...state.cart, cartProduct],
    }
}
export default CartReducer;