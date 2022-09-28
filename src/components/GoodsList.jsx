import { GoodsItem } from "./GoodsItem";
import Row from 'react-bootstrap/Row';

function GoodsList(props) {
  const { goods=[], addToBasket=Function.prototype } = props;
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <Row >
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
      ))}
    </Row>
  );
}

export { GoodsList };
