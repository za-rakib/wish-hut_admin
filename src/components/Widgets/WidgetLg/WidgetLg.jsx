import React from "react";
import classes from "./WidgetLg.module.css";

const WidgetLg = () => {
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
        <tr className={classes.widgetLgTr}>
          <td className={classes.widgetLgUser}>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.widgetLgImg}
            />
            <span className={classes.widgetLgName}>Susan Carol</span>
          </td>
          <td className={classes.widgetLgDate}>2 Jun 2021</td>
          <td className={classes.widgetLgAmount}>$122.00</td>
          <td className={classes.widgetLgStatus}>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className={classes.widgetLgTr}>
          <td className={classes.widgetLgUser}>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.widgetLgImg}
            />
            <span className={classes.widgetLgName}>Susan Carol</span>
          </td>
          <td className={classes.widgetLgDate}>2 Jun 2021</td>
          <td className={classes.widgetLgAmount}>$122.00</td>
          <td className={classes.widgetLgStatus}>
            <Button type="Declined" />
          </td>
        </tr>
        <tr className={classes.widgetLgTr}>
          <td className={classes.widgetLgUser}>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.widgetLgImg}
            />
            <span className={classes.widgetLgName}>Susan Carol</span>
          </td>
          <td className={classes.widgetLgDate}>2 Jun 2021</td>
          <td className={classes.widgetLgAmount}>$122.00</td>
          <td className={classes.widgetLgStatus}>
            <Button type="Pending" />
          </td>
        </tr>
        <tr className={classes.widgetLgTr}>
          <td className={classes.widgetLgUser}>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.widgetLgImg}
            />
            <span className={classes.widgetLgName}>Susan Carol</span>
          </td>
          <td className={classes.widgetLgDate}>2 Jun 2021</td>
          <td className={classes.widgetLgAmount}>$122.00</td>
          <td className={classes.widgetLgStatus}>
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
