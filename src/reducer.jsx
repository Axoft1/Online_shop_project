export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS": {
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    case "INC_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case "DEC_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };
    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === payload.mainId
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (itemIndex === index) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };

    default:
      return state;
  }
}
