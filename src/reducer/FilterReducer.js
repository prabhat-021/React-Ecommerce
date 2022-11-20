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
        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_value: action.payload,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            const { filter_product } = state;
            let tempSortProduct = [...filter_product];
            // console.log(tempSortProduct)

            const sortingProduct = (a, b) => {
                if (state.sorting_value === "lowest") {
                    return a.price - b.price;
                    // let lowestSortProduct = tempSortProduct.map(a => a.price);
                }
                if (state.sorting_value === "highest") {
                    return b.price - a.price;
                };
                if (state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = tempSortProduct.sort(sortingProduct);

            return {
                ...state,
                filter_product: newSortData,
            }
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
        case "FILTER_PRODUCTS":
            let { all_product } = state;
            let tempFilterProduct = [...all_product]
            const { text, category } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.name.toLowerCase().includes(text);
                });
            }
            if (category) {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.category === category;
                });
            }
            return {
                ...state,
                filter_product: tempFilterProduct,
            }
        default:
            return state;
    }
}

export default filterReducer;