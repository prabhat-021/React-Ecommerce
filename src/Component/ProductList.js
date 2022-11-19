import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

export default function ProductList() {
    const { filter_product, grid_view } = useFilterContext();

    if (grid_view === true) {
        return <GridView products={filter_product} />
    }
    if (grid_view === false) {
        return <ListView products={filter_product} />
    }

}