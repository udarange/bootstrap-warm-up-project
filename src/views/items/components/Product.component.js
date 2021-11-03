import { addToCartAction } from "../redux/actions/itemAction";
import React from "react";
import { useDispatch } from "react-redux";

export default function Product({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="product col-12 col-sm-6 col-md-4 col-lg-3 my-2">
      <div style={{ position: "relative" }}>
        <img
          src={item.details?.image}
          alt={item.name}
          style={{
            width: "100%",
            objectFit: "contain",
            height: "240px",
            maxHeight: "240px",
          }}
        />
        {item.details?.tag && (
          <p
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              fontSize: "12px",
              color: "white",
              background: "black",
              padding: "5px",
            }}
          >
            {item.details?.tag}
          </p>
        )}
      </div>
      <p
        className="text-center font-weight-bold mt-2"
        style={{ fontSize: "14px", minHeight: 84 }}
      >
        {item.name}
      </p>
      <p className="text-center">{`$ ${item.details?.price}`}</p>
      <p className="text-center">or 9 x $ 1.21</p>
      <button
        type="button"
        onClick={() => dispatch(addToCartAction(item.id))}
        style={{
          width: "100%",
          background: "black",
          color: "white",
          fontSize: "18px",
          height: "40px",
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
