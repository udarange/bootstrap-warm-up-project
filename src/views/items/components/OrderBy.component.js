import React from "react";

export default function OrderBy({ setOrderBy }) {
  return (
    <div className="dropdown col-6 d-flex align-items-center justify-content-end">
      <div className="row align-items-center">
        <p className="m-0">Order by</p>
        <button
          className="btn btn-sm dropdown-toggle ml-2"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          <button
            type="button"
            className="dropdown-item"
            onClick={() => setOrderBy("price-a-z")}
          >
            Price (A-Z)
          </button>
          <button
            type="button"
            className="dropdown-item"
            onClick={() => setOrderBy("price-z-a")}
          >
            Price (Z-A)
          </button>
          <button
            type="button"
            className="dropdown-item"
            onClick={() => setOrderBy(undefined)}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
