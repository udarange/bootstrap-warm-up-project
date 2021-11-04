import React from "react";

export default function SelectItemType({
  setSelectedItemType,
  selectedItemType,
}) {
  return (
    <>
      <div className="mt-4">
        <h3>Item Type:</h3>
        <button
          className="all-btn border-0 font-weight-bold w-100"
          type="button"
          onClick={() => setSelectedItemType("t-shirt")}
          style={{
            background: selectedItemType === "t-shirt" && "gray",
          }}
        >
          T-Shirt
        </button>
        <button
          className="all-btn border-0 font-weight-bold w-100"
          type="button"
          onClick={() => setSelectedItemType("dress shirts")}
          style={{
            background: selectedItemType === "dress shirts" && "gray",
          }}
        >
          Dress Shirts
        </button>
      </div>
      <button
        className="all-btn border-0 font-weight-bold w-100"
        type="button"
        onClick={() => setSelectedItemType("all")}
        style={{
          background: selectedItemType === "all" && "gray",
        }}
      >
        ALL
      </button>
    </>
  );
}
