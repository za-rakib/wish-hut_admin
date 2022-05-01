import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import classes from "./FeaturedInfo.module.css";
const FeaturedInfo = () => {
  return (
    <div className={classes.featuredInfo}>
      <div className={classes.featuredItem}>
        <span className={classes.featuredTitle}>Revenue</span>
        <div className={classes.featuredMonyContainers}>
          <span className={classes.featuredMony}>$ 3,536</span>{" "}
          <span className={classes.featuredMonyRate}>
            -12.4 <ArrowDownward className={`${classes.featuredIcon} ${classes.negative}`} />
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to last month</span>
      </div>

      <div className={classes.featuredItem}>
        <span className={classes.featuredTitle}>Sales</span>
        <div className={classes.featuredMonyContainers}>
          <span className={classes.featuredMony}>$ 4,536</span>{" "}
          <span className={classes.featuredMonyRate}>
            -1.4 <ArrowDownward className={`${classes.featuredIcon} ${classes.negative}`}/>
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to last month</span>
      </div>

      <div className={classes.featuredItem}>
        <span className={classes.featuredTitle}>Cost</span>
        <div className={classes.featuredMonyContainers}>
          <span className={classes.featuredMony}>$2,345</span>{" "}
          <span className={classes.featuredMonyRate}>
            +2.4 <ArrowUpward className={classes.featuredIcon} />
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
