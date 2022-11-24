import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../styles/FormatPrice";
import { Button } from "../styles/Button";

export default function FilterSection() {
  const { filters: { text, category, maxPrice, minPrice, price, colors }, upadteFilterVlaue, all_product , clearFilter} = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElm) => {
      return curElm[property];
    });

    if (property === "colors") {
      return newVal = ["all", ...new Set([].concat(...newVal))]
    } else {
      return newVal = ["all", ...new Set(newVal)];
    }
    // console.log(newVal);
  };

  const categoryOnlyData = getUniqueData(all_product, "category");
  const companyOnlyData = getUniqueData(all_product, "company");
  const colorOnlyData = getUniqueData(all_product, "colors");
  // console.log(colorOnlyData);
  return <Wrapper>
    <div className="filter-search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={upadteFilterVlaue}
          placeholder="SEARCH"
        />
      </form>
    </div>

    <div className="filter-category">
      <h3>Category</h3>
      <div>
        {categoryOnlyData.map((curElm, index) => {
          return <button key={index} type="button" name="category" value={curElm} onClick={upadteFilterVlaue}>
            {curElm}
          </button>
        })}
      </div>
    </div>
    <div className="filter-company">
      <h3>Comapany</h3>
      <form action="#">
        {/* <label></label> */}
        <select name="company" id="company" className="filter-company--select" onClick={upadteFilterVlaue}>
          {
            companyOnlyData.map((curElm, index) => {
              return <option key={index} name="company" value={curElm}>{curElm} </option>
            })
          }
        </select>
      </form>
    </div>
    <div className="filter-colors colors">
      <h3>Colors</h3>
      <div className="filter-color-style">{
        colorOnlyData.map((curElm, index) => {
          if (curElm === "all") {
            return <button key={index} name="colors" value={curElm} type="button" className="color-all--style" onClick={upadteFilterVlaue}>all</button>
          }
          return <button key={index} name="colors" value={curElm} type="button" style={{ backgroundColor: curElm }} className={colors === curElm ? "btnStyle active" : "btnStyle"} onClick={upadteFilterVlaue}>{colors === curElm ? <FaCheck className="checkStyle" /> : null}
          </button>
        })
      }
      </div>
    </div>

    <div className="filter_price">
      <h3>Price</h3>
      <p><FormatPrice price={price} /> </p>
      <p>
        <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={upadteFilterVlaue} />
      </p>
    </div>
    <div className="filter-clear">
      <Button className="btn" onClick={clearFilter}>Clear Filter</Button>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;