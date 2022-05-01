import { Visibility } from "@material-ui/icons";
import React from "react";
import classes from "./WidgetSm.module.css";

const WidgetSm = () => {
  return (
    <div className={classes.widgetSm}>
      <span className={classes.widgetSmTitle}>New join member</span>
      <ul className={classes.widgetSmList}>
        <li className={classes.widgetSmListItem}>
          <img className={classes.widgetSmImage}  src="https://i.ibb.co/zHyMJK1/dr-mary.jpg" alt="" />
          <div className={classes.widgetSmUser}>
            <span className={classes.widgetSmUserName}>Dr. Mary</span>
            <span className={classes.widgetSmUserTitle}>Doctor</span>
          </div>
          <button className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSsIcon}/>
            Display
          </button>
        </li>
        
        <li className={classes.widgetSmListItem}>
          <img className={classes.widgetSmImage}  src="https://i.ibb.co/zHyMJK1/dr-mary.jpg" alt="" />
          <div className={classes.widgetSmUser}>
            <span className={classes.widgetSmUserName}>Dr. Mary</span>
            <span className={classes.widgetSmUserTitle}>Doctor</span>
          </div>
          <button className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSsIcon}/>
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img className={classes.widgetSmImage}  src="https://i.ibb.co/zHyMJK1/dr-mary.jpg" alt="" />
          <div className={classes.widgetSmUser}>
            <span className={classes.widgetSmUserName}>Dr. Mary</span>
            <span className={classes.widgetSmUserTitle}>Doctor</span>
          </div>
          <button className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSsIcon}/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
