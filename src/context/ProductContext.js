import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import { ProductReducer as reducer } from "../reducer/ProductReducer";
// import{ API }from "../Assets/Data/data";

const API = "https://api.npoint.io/eedc6772f9ebc2461fe8";

const AppContext = createContext();
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }

    };
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(API);
            console.log(res);
            const singleProduct = res.data.find(item => {
                return item.id === url;
            });
            console.log(singleProduct);
            // const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
};

// Custum hook
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };