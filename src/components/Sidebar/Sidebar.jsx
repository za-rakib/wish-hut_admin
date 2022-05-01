import {
  AttachMoney,
  BarChart,
  ChatBubbleOutlineSharp,
  DynamicFeed,
  LineStyle,
  MailOutlineSharp,
  People,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.SidebarTitle}>Dashboard</h3>
          <ul className={classes.sidebarList}>
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <li className={`${classes.sidebarListItem} ${classes.active}`}>
                <LineStyle className={classes.sidebarIcon} />
                Home
              </li>
            </Link>
            <li className={classes.sidebarListItem}>
              <Timeline className={classes.sidebarIcon} />
              Analytics
            </li>
            <li className={classes.sidebarListItem}>
              <TrendingUp className={classes.sidebarIcon} />
              Sales
            </li>
          </ul>
        </div>

        <div className={classes.sidebarMenu}>
          <h3 className={classes.SidebarTitle}>Quick Menu</h3>
          <ul className={classes.sidebarList}>
            <Link
              to="/users"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={classes.sidebarListItem}>
                <People className={classes.sidebarIcon} />
                Users
              </li>
            </Link>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={classes.sidebarListItem}>
                <Storefront className={classes.sidebarIcon} />
                Products
              </li>
            </Link>
            <li className={classes.sidebarListItem}>
              <AttachMoney className={classes.sidebarIcon} />
              Transactions
            </li>
            <li className={classes.sidebarListItem}>
              <BarChart className={classes.sidebarIcon} />
              Reports
            </li>
          </ul>
        </div>

        <div className={classes.sidebarMenu}>
          <h3 className={classes.SidebarTitle}>Notifications</h3>
          <ul className={classes.sidebarList}>
            <li className={classes.sidebarListItem}>
              <MailOutlineSharp className={classes.sidebarIcon} />
              Mail
            </li>
            <li className={classes.sidebarListItem}>
              <DynamicFeed className={classes.sidebarIcon} />
              Feedback
            </li>
            <li className={classes.sidebarListItem}>
              <ChatBubbleOutlineSharp className={classes.sidebarIcon} />
              Message
            </li>
          </ul>
        </div>

        <div className={classes.sidebarMenu}>
          <h4 className={classes.SidebarTitle}>Staff</h4>
          <ul className={classes.sidebarList}>
            <li className={classes.sidebarListItem}>
              <WorkOutline className={classes.sidebarIcon} />
              Manage
            </li>
            <li className={classes.sidebarListItem}>
              <Timeline className={classes.sidebarIcon} />
              Analytics
            </li>
            <li className={classes.sidebarListItem}>
              <Report className={classes.sidebarIcon} />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
