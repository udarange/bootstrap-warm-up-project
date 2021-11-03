import { removeFromCartAction } from "../redux/actions/itemAction";
import React from "react";
import { useDispatch } from "react-redux";

const styles = {
  root: {
    width: "100%",
    padding: "0px 20px",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
};

export default function CartItem({ item, quantity, sum }) {
  const dispatch = useDispatch();

  return (
    <div className="card-xx" style={styles.root}>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          src={item.details?.image}
          alt={item.name}
          style={{
            width: "70px",
            objectFit: "contain",
            height: "150px",
            maxHeight: "150px",
          }}
        />
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 15px",
          }}
        >
          <p
            className="text-left font-weight-bold m-0"
            style={{ fontSize: "14px", color: "white" }}
          >
            {item.name}
          </p>
          <p
            className="text-left font-weight-bold m-0"
            style={{ fontSize: "14px", color: "gray" }}
          >
            {item.details?.size}
          </p>
          <p
            className="text-left font-weight-bold m-0"
            style={{ fontSize: "14px", color: "gray" }}
          >
            {`Quantity: ${quantity}`}
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          color: "lightyellow",
          whiteSpace: "nowrap",
        }}
      >
        {`$ ${sum.toFixed(2)}`}
      </p>
      <button
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          border: "none",
          color: "gray",
          background: "transparent",
          padding: "20px",
        }}
        type="button"
        onClick={() => dispatch(removeFromCartAction(item.id))}
      >
        X
      </button>
    </div>
  );
}
