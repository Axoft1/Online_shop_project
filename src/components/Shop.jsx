import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { BasicExample } from "./Spinner";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import {InfoAlert} from "./Alert"

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const removeFromBasket = (id) => {
    const newOrder = order.filter((el) => el.mainId !== id);
    setOrder(newOrder);
  };
  const incQuantity = (id) => {
    const newOrder = order.map((el) => {
      if (el.mainId === id) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity = (id) => {
    const newOrder = order.map((el) => {
      if (el.mainId === id) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (itemIndex === index) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName)
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const closeAlert = () => {
    setAlertName("")
  }
  return (
    <div className="conteiner">
      
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <BasicExample />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      
      {
        alertName && <InfoAlert name={alertName} closeAlert={closeAlert}/>
      }
    </div>
  );
}
export default Shop;
