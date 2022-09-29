import { GoodsItem } from "./GoodsItem";
import Row from "react-bootstrap/Row";
import { ShopContext } from "../context";
import { useContext } from "react";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext)
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <Row>
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </Row>
  );
}

export { GoodsList };
