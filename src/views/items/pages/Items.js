import React, { useEffect, useState } from "react";
import { fetchItemListDataAction } from "../redux/actions/itemAction";
import { useDispatch, useSelector } from "react-redux";
import SelectSizes from "../components/SelectSizes.component";
import SelectItemType from "../components/SelecttemType.component";
import Product from "../components/Product.component";
import OrderBy from "../components/OrderBy.component";
import FoundedCount from "../components/FoundedCount.component";

export default function Items() {
  const dispatch = useDispatch();
  const { itemList } = useSelector((state) => state.itemReducer);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedItemType, setSelectedItemType] = useState("all");
  const [orderBy, setOrderBy] = useState(undefined);

  useEffect(() => {
    dispatch(fetchItemListDataAction());
  }, [dispatch]);

  useEffect(() => {
    const tempList = itemList.filter((el) => {
      let isValid = true;
      if (selectedSize !== "all") {
        isValid = isValid && el.details?.size === selectedSize;
      }
      if (selectedItemType !== "all") {
        isValid = isValid && el.details?.type === selectedItemType;
      }
      return isValid;
    });

    if (orderBy === "price-a-z") {
      setFilteredItems(
        tempList.sort(
          (a, b) => parseInt(a.details?.price) - parseInt(b.details?.price)
        )
      );
    } else if (orderBy === "price-z-a") {
      setFilteredItems(
        tempList.sort(
          (a, b) => parseInt(b.details?.price) - parseInt(a.details?.price)
        )
      );
    } else {
      setFilteredItems(tempList);
    }
  }, [selectedSize, selectedItemType, orderBy, itemList]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-2">
          <SelectSizes
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
          />
          <SelectItemType
            setSelectedItemType={setSelectedItemType}
            selectedItemType={selectedItemType}
          />
        </div>
        <div className="col-12 col-md-10">
          <div className="row mb-2">
            <FoundedCount filteredItems={filteredItems} />
            <OrderBy setOrderBy={setOrderBy} />
          </div>
          <div className="row">
            {filteredItems.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
