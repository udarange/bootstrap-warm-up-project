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
          type="button"
          onClick={() => setSelectedItemType("t-shirt")}
          style={{
            border: "none",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
            height: "33px",
            borderRadius: "33px",
            marginBottom: "10px",
            background: selectedItemType === "t-shirt" && "gray",
          }}
        >
          T-Shirt
        </button>
        <button
          type="button"
          onClick={() => setSelectedItemType("dress shirts")}
          style={{
            border: "none",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
            height: "33px",
            borderRadius: "33px",
            marginBottom: "10px",
            background: selectedItemType === "dress shirts" && "gray",
          }}
        >
          Dress Shirts
        </button>
      </div>
      <button
        type="button"
        onClick={() => setSelectedItemType("all")}
        style={{
          border: "none",
          fontSize: "12px",
          fontWeight: "bold",
          width: "100%",
          height: "33px",
          borderRadius: "33px",
          marginBottom: "10px",
          background: selectedItemType === "all" && "gray",
        }}
      >
        ALL
      </button>
    </>
  );
}
