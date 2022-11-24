import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/CartReducer.js";

const CartContext = createContext();

const getLocalStorageData = () => {
    let newCartData = localStorage.getItem("prabhatCart");
    if (newCartData === []) {
        return [];
    } else {
        return JSON.parse(newCartData);
    }
}

const initialState = {
    // cart: [],
    cart: getLocalStorageData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        return dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    }

    const removeItem = (id) => {
        return dispatch({ type: "REMOVE_ITEM", payload: id });
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    useEffect(() => {
        localStorage.setItem("prabhatCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { useCartContext, CartProvider };
