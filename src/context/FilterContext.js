import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();
const initialState = {
    filter_product: [],
    all_product: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        company: "all",
        category: "all",
        colors:"all",
        maxPrice:0,
        minPrice:0,
        price:0,
    },
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    const sorting = (event) => {
        let userValue = event.target.value;
        return dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }

    const upadteFilterVlaue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }

    const clearFilter = ()=>{
        dispatch({type:"CLEAR_FILTERS"})
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_DATA", payload: products })
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, upadteFilterVlaue,clearFilter }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}