import React from "react";

export default function SubTotal({ subtotal }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: "0 20px",
        alignItems: "center",
      }}
    >
      <p
        className="text-left font-weight-bold m-0"
        style={{ fontSize: "20px", color: "gray" }}
      >
        SUBTOTAL
      </p>
      <p
        className="m-0"
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          color: "lightyellow",
          whiteSpace: "nowrap",
        }}
      >
        {`$ ${subtotal.toFixed(2)}`}
      </p>
    </div>
  );
}
