import React from "react";

export default function SubTotal({ subtotal }) {
  return (
    <div className="d-flex flex-row justify-content-between w-100 align-items-center px-4">
      <p
        className="text-left font-weight-bold m-0"
        style={{ fontSize: "20px", color: "gray" }}
      >
        SUBTOTAL
      </p>
      <p
        className="m-0 font-weight-bold flex-nowrap"
        style={{
          fontSize: "25px",
          color: "lightyellow",
        }}
      >
        {`$ ${subtotal.toFixed(2)}`}
      </p>
    </div>
  );
}
