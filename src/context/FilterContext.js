import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();
const initialState ={
    filter_product:[],
    all_product:[],
    grid_view:true,
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"})
    }

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_DATA", payload: products })
    }, [products]);
    return (
        <FilterContext.Provider value={{ ...state , setGridView}}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}