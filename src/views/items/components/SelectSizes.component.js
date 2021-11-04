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
        className="all-btn border-0 font-weight-bold w-100"
        type="button"
        onClick={() => setSelectedSize("all")}
        style={{
          background: selectedSize === "all" && "gray",
        }}
      >
        ALL
      </button>
    </>
  );
}
