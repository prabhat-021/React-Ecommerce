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
                grid_view: true,
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }
        default:
            return state;
    }
}

export default filterReducer;