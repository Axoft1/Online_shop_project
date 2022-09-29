import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { XLg, PlusSquare, DashSquare } from "react-bootstrap-icons";
import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const { mainId, displayName, quantity, price } = props;
  const { removeFromBasket, decQuantity, incQuantity } =
    useContext(ShopContext);
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {displayName} {price.finalPrice * quantity} руб.
        </div>
      </div>
      <PlusSquare className="square" onClick={() => incQuantity(mainId)} />
      <Badge bg="primary">{quantity}</Badge>
      <DashSquare className="square" onClick={() => decQuantity(mainId)} />
      <XLg className="basket_delete" onClick={() => removeFromBasket(mainId)} />
    </ListGroup.Item>
  );
}
export { BasketItem };
