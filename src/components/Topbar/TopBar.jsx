import React from "react";
import classes from "./TopBar.module.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import image from "../../assets/image/logo1.png";
const TopBar = () => {
  return (
    <div className={classes.topBar}>
      <div className={classes.topBarWrapper}>
        <div className={classes.topLeft}>
          <div className={classes.logo}>Wish Admin</div>
        </div>
        <div className={classes.topRight}>
          <div className={classes.topBarIconContainer}>
            <div className={classes.topBarIcon}>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone />
              </Badge>
            </div>
            <div className={classes.topBarIcon}>
              <Badge badgeContent={2} color="secondary">
                <Language />
              </Badge>
            </div>
            <div className={classes.topBarIcon}>
              <Settings />
            </div>
          </div>
          <div className={classes.topRightAvatar}>
            <img src={image} alt="wish hut" className={classes.topAvatar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
