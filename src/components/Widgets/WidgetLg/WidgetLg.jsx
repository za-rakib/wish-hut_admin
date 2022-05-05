import React, { useEffect, useState } from "react";
import { userRequest } from "../../../requestMethod";
import classes from "./WidgetLg.module.css";
import {format} from 'timeago.js'

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

 // console.log(orders);

  const Button = ({ type }) => {
    return (
      <button className={`${classes.widgetLgButton} ${classes[type]}`}>
        {type}
      </button>
    );
  };

  return (
    <div className={classes.widgetLg}>
      <h3 className={classes.widgetLgTitle}>Latest transactions</h3>
      <table className={classes.widgetLgTable}>
        <tr className={classes.widgetLgTr}>
          <th className={classes.widgetLgTh}>Customer</th>
          <th className={classes.widgetLgTh}>Date</th>
          <th className={classes.widgetLgTh}>Amount</th>
          <th className={classes.widgetLgTh}>Status</th>
        </tr>

        {orders.map((order, index) => (
          <tr className={classes.widgetLgTr} key={index}>
            <td className={classes.widgetLgUser}>
              {/* <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className={classes.widgetLgImg}
              /> */}
              <span className={classes.widgetLgName}>{order.userId}</span>
            </td>
            <td className={classes.widgetLgDate}>{format(order.createdAt)}</td>
            <td className={classes.widgetLgAmount}>$ {order.amount}</td>
            <td className={classes.widgetLgStatus}>
              <Button type={order.status}/>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
