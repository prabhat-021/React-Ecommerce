import axios from "axios";
import { createContext, useEffect } from "react";
import { useContext } from "react";

const API = "https://api.pujakaitem.com/api/products";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products);
    }


    useEffect(() => {
        getProducts(API);
    })

    return <AppContext.Provider value="Prabat">{children}</AppContext.Provider>
};

// Custum hook
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };