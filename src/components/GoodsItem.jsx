import Card from "react-bootstrap/Card";
import { ShopContext } from "../context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";

function GoodsItem(props) {
  
  const {
    mainId,
    displayName,
    price,
    displayAssets,
    displayType,
  } = props;
  const {addToBasket} = useContext(ShopContext)

  return (    
  <Card  key={mainId} style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={displayAssets[0].full_background}
        alt={displayName}
      />
      <Card.Body>
        <Card.Title>{displayName}</Card.Title>
        <Card.Text>{displayType}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="primary"
          onClick={() => addToBasket({ mainId, displayName, price })}
        >
          Купить
        </Button>
        <span>    {price.finalPrice} руб.</span>
      </Card.Footer>
    </Card>
  );
}

export { GoodsItem };
