import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { fetchItemListDataAction } from "../redux/actions/itemAction";
import { useDispatch, useSelector } from "react-redux";

export default function Items() {
  const { itemList } = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemListDataAction());
  }, [dispatch]);

  console.log(itemList);

  return <Container>xxx</Container>;
}
