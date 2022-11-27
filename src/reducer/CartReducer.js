const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, color, amount, product } = action.payload;
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

        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter(
                (curElm) => curElm.id !== action.payload)
            return {
                ...state,
                cart: updatedCart,
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }
        case "SET_DECREMENT":
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

        case "SET_INCREMENT":
            let updatedProduct1 = state.cart.map((curElm) => {
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
            return { ...state, cart: updatedProduct1 }
        case "CART_TOTAL_ITEM":
            let updatedItem = state.cart.reduce(
                // console.log(updatedItem);
                (initialValue, curElm) => {
                    let { amount } = curElm;
                    initialValue = initialValue + amount;
                    return initialValue;
                }, 0);
            return {
                ...state,
                total_item: updatedItem,
            }

        case "CART_TOTAL_PRICE":
            let updatedItem1 = state.cart.reduce(
                (initialValue, curElm) => {
                    let { price, amount } = curElm;
                    initialValue = initialValue + (amount * price);
                    return initialValue;
                }, 0);
            return {
                ...state,
                total_amount: updatedItem1,
            }
        default:
            return state;
    }
}
export default CartReducer;