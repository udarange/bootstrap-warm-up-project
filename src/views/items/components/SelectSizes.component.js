import React from "react";

export default function SelectSizes({ setSelectedSize, selectedSize }) {
  return (
    <>
      <div>
        <h3>Sizes:</h3>
        <button
          type="button"
          className="btn-circle"
          onClick={() => setSelectedSize("xsmall")}
          style={{ background: selectedSize === "xsmall" && "yellow" }}
        >
          XS
        </button>
        <button
          type="button"
          className="btn-circle"
          onClick={() => setSelectedSize("small")}
          style={{ background: selectedSize === "small" && "gray" }}
        >
          S
        </button>
        <button
          type="button"
          className="btn-circle"
          onClick={() => setSelectedSize("medium")}
          style={{ background: selectedSize === "medium" && "gray" }}
        >
          M
        </button>
        <button
          type="button"
          className="btn-circle"
          onClick={() => setSelectedSize("mlarge")}
          style={{ background: selectedSize === "mlarge" && "gray" }}
        >
          ML
        </button>
        <button
          type="button"
          className="btn-circle"
          onClick={() => setSelectedSize("large")}
          style={{ background: selectedSize === "large" && "gray" }}
        >
          L
        </button>
        <button
          type="button"
          className="btn-circle"
          onClick={() => setSelectedSize("xlarge")}
          style={{ background: selectedSize === "xlarge" && "gray" }}
        >
          XL
        </button>
        <button
          type="button"
          className="btn-circle"
          onClick={() => setSelectedSize("xxlarge")}
          style={{ background: selectedSize === "xxlarge" && "gray" }}
        >
          XXL
        </button>
      </div>
      <button
        type="button"
        onClick={() => setSelectedSize("all")}
        style={{
          border: "none",
          fontSize: "12px",
          fontWeight: "bold",
          width: "100%",
          height: "33px",
          borderRadius: "33px",
          background: selectedSize === "all" && "gray",
        }}
      >
        ALL
      </button>
    </>
  );
}
