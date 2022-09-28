import React from "react";
// import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";

function InfoAlert(props) {
  const { name = "", closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
        clearTimeout(timerId)
    }
    
    //eslint-disable-next-line
  }, [name]);

  return (
    <div className="alert_castom" >
      "{name}" Добавлен в козину
    </div>
  );
}

export { InfoAlert };
