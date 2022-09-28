import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

function GoodsItem(props) {
  
  const {
    mainId,
    displayName,
    price,
    displayAssets,
    displayType,
    addToBasket = Function.prototype,
  } = props;

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
