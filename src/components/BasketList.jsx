import { BasketItem } from "./BasketItem";
import ListGroup from "react-bootstrap/ListGroup";
import { XLg } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../context";
import { useContext } from "react";

function BasketList() {
  const { order = [], handleBasketShow } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
    <ListGroup as="ol" className="basket-list">
      <ListGroup.Item
        active
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Корзина</div>
        </div>{" "}
        <Badge bg="primary">
          <XLg className="basket-close" onClick={() => handleBasketShow()} />
        </Badge>
      </ListGroup.Item>

      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">пусто</div>
        </ListGroup.Item>
      )}

      <ListGroup.Item
        active
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Общая стоимость: {totalPrice} руб.</div>
        </div>
        <Button variant="primary">Оформить</Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export { BasketList };
