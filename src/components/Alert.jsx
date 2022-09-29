import React from "react";
import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function InfoAlert() {
  const { name = "", closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };

    //eslint-disable-next-line
  }, [name]);

  return <div className="alert_castom">"{name}" Добавлен в козину</div>;
}

export { InfoAlert };
