const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_DATA":
            return {
                ...state,
                filter_product: action.payload,
                all_product: action.payload,
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view:true,
            }
        default:
            return state;
    }
}

export default filterReducer;