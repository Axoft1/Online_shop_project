
import { Cart4 } from 'react-bootstrap-icons';

function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype} = props;
  return (
    <div className="cart"  onClick={handleBasketShow}>
      <Cart4 className="art3" size={45}></Cart4>
      {quantity ? (<span className="cart-quantity">{quantity}</span>) : null}
    </div>
  );
}

export  {Cart};
