import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { BasicExample } from "./Spinner";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { InfoAlert } from "./Alert";
import { ShopContext } from "../context";

function Shop() {
  const { loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  // const removeFromBasket = (id) => {
  //   const newOrder = order.filter((el) => el.mainId !== id);
  //   setOrder(newOrder);
  // };
  // const incQuantity = (id) => {
  //   const newOrder = order.map((el) => {
  //     if (el.mainId === id) {
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };
  // const decQuantity = (id) => {
  //   const newOrder = order.map((el) => {
  //     if (el.mainId === id) {
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity >= 0 ? newQuantity : 0,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const handleBasketShow = () => {
  //   setBasketShow(!isBasketShow);
  // };

  // const addToBasket = (item) => {
  //   const itemIndex = order.findIndex(
  //     (orderItem) => orderItem.mainId === item.mainId
  //   );

  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...item,
  //       quantity: 1,
  //     };
  //     setOrder([...order, newItem]);
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (itemIndex === index) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     setOrder(newOrder);
  //   }
  //   setAlertName(item.displayName)
  // };
  // const closeAlert = () => {
  //   setAlertName("")
  // }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
      //eslint-disable-next-line
  }, []);

  return (
    <div className="conteiner">
      <Cart quantity={order.length} />
      {loading ? <BasicExample /> : <GoodsList />}
      {isBasketShow && <BasketList />}

      {alertName && <InfoAlert />}
    </div>
  );
}
export default Shop;
