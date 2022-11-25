const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        // console.log(product);

        let existingProduct = state.cart.find((curElm) => curElm.id === id + color);
        if (existingProduct) {
            let updatedProduct = state.cart.map((curElm) => {
                if (curElm.id == id + color) {
                    let newAmount = curElm.amount + amount;

                    if (newAmount >= curElm.max) {
                        newAmount = curElm.max;
                    }
                    return {
                        ...curElm,
                        amount: newAmount,
                    }
                } else {
                    return curElm;
                }

            })
            return {
                ...state,
                cart: updatedProduct,
            }
        } else {
            let cartProduct;

            cartProduct = {
                id: id + color,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }
    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curElm) => curElm.id !== action.payload)
        return {
            ...state,
            cart: updatedCart,
        }
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }
    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curElm) => {
            if (curElm.id === action.payload) {
                let decAmount = curElm.amount - 1;
                if (decAmount <= 1) {
                    decAmount = 1;
                }
                return {
                    ...curElm, amount: decAmount,
                }
            } else {
                return curElm;
            }
        })
        return { ...state, cart: updatedProduct }
    }
    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curElm) => {
            if (curElm.id === action.payload) {
                let incAmount = curElm.amount + 1;
                if (incAmount >= curElm.max) {
                    incAmount = curElm.max;
                }
                return {
                    ...curElm, amount: incAmount,
                }
            } else {
                return curElm;
            }
        })
        return { ...state, cart: updatedProduct }
    }
    return state;
}
export default CartReducer;