import { removeFromCartAction } from "../redux/actions/itemAction";
import React from "react";
import { useDispatch } from "react-redux";

const styles = {
  img: {
    width: "70px",
    objectFit: "contain",
    height: "150px",
    maxHeight: "150px",
  },
  name: { fontSize: "14px", color: "white" },
  desc: { fontSize: "14px", color: "gray" },
  sum: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "lightyellow",
  },
  close: {
    top: "0",
    right: "0",
    color: "gray",
  },
};

export default function CartItem({ item, quantity, sum }) {
  const dispatch = useDispatch();

  return (
    <div className="card-xx w-100 px-4 justify-content-between d-flex flex-row align-items-center position-relative">
      <div className="d-flex flex-row">
        <img src={item.details?.image} alt={item.name} style={styles.img} />
        <div className="d-flex flex-column justify-content-center px-3">
          <p className="text-left font-weight-bold m-0" style={styles.name}>
            {item.name}
          </p>
          <p className="text-left font-weight-bold m-0" style={styles.desc}>
            {item.details?.size}
          </p>
          <p className="text-left font-weight-bold m-0" style={styles.desc}>
            {`Quantity: ${quantity}`}
          </p>
        </div>
      </div>
      <p className="text-nowrap" style={styles.sum}>
        {`$ ${sum.toFixed(2)}`}
      </p>
      <button
        className="btn position-absolute border-0 bg-transparent px-4 "
        style={styles.close}
        type="button"
        onClick={() => dispatch(removeFromCartAction(item.id))}
      >
        X
      </button>
    </div>
  );
}
