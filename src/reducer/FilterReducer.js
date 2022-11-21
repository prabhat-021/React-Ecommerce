const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_DATA":
            let priceArr = action.payload.map((curElm) => curElm.price);
            let maxPrice = Math.max(...priceArr);

            return {
                ...state,
                filter_product: action.payload,
                all_product: action.payload,
                filters: {
                    ...state.filters,
                    maxPrice,
                    price: maxPrice,
                }

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
            const { text, category, company, colors, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.name.toLowerCase().includes(text);
                });
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.category === category;
                });
            }
            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.company === company;
                });
            }
            if (colors !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.colors.includes(colors);
                });
            }
            if (price) {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.price <= price;
                });
            }

            return {
                ...state,
                filter_product: tempFilterProduct,
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    company: "all",
                    category: "all",
                    colors: "all",
                    maxPrice: 0,
                    minPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                }
            }
        default:
            return state;
    }
}

export default filterReducer;