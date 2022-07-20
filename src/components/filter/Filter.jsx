import React from "react";
import { useFilter } from "../../context";

const Filter = () => {
    const {
        FilterState: { byCategory, sortBy },
        FilterDispatch,
      } = useFilter();
  return (
    <div className="filter-sidebar">
          <div >
            <div className="filter-sidebar-heading">
              <span>
                <b>Filters</b>
              </span>
              <button
                className="ecom-btn"
                onClick={() => {
                  FilterDispatch({ type: "Clear_Filter" });
                }}
              >
                Clear
              </button>
            </div>
            <div className="filter-cat">
              <span>
                <b>Category</b>
              </span>
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="category"
                  value={byCategory}
                  onChange={() =>
                    FilterDispatch({ type: "CATEGORY", payload: "Vegetables" })
                  }
                  checked={byCategory && byCategory === "Vegetables"}
                ></input>
                Vegetables
              </label>
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    FilterDispatch({ type: "CATEGORY", payload: "Fruits" })
                  }
                  checked={byCategory && byCategory === "Fruits"}
                ></input>
                Fruits
              </label> 
              
           
            </div>
            <div className="filter-cat">
              <span>
                <b>Sort by Price</b>
              </span>
              <label className="filter-item">
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    FilterDispatch({
                      type: "SORT",
                      payload: "PRICE_HIGH_TO_LOW",
                    })
                  }
                  checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
                ></input>
                {"   "}Price - High to Low
              </label>
              <label className="filter-item">
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    FilterDispatch({
                      type: "SORT",
                      payload: "PRICE_LOW_TO_HIGH",
                    })
                  }
                  checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
                ></input>{" "}
                 Price - Low to High
              </label>
            </div>
          </div>
        </div>
      
  );
}

export default Filter;
