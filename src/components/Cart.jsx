import { ShopContext } from "../context";
import { useContext } from "react";
import { Cart4 } from 'react-bootstrap-icons';

function Cart() {
  const { order, handleBasketShow} = useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className="cart"  onClick={handleBasketShow}>
      <Cart4 className="art3" size={45}></Cart4>
      {quantity ? (<span className="cart-quantity">{quantity}</span>) : null}
    </div>
  );
}

export  {Cart};
