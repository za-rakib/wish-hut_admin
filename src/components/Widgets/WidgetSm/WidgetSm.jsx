import { Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { userRequest } from "../../../requestMethod";

import classes from "./WidgetSm.module.css";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("/users/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  // console.log("users sm",users && users);
  return (
    <div className={classes.widgetSm}>
      <span className={classes.widgetSmTitle}>New join member</span>
      <ul className={classes.widgetSmList}>
        {users.map((user,index) => (
          <li className={classes.widgetSmListItem} key={index}>
            <img
              className={classes.widgetSmImage}
              src={
                user.img ||
                "https://www.blackhill.se/static/files/6/profilbild-anonym.jpg"
              }
              alt=""
            />
            <div className={classes.widgetSmUser}>
              <span className={classes.widgetSmUserName}>{user.userName}</span>
            </div>
            <button className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSsIcon} />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
