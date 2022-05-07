import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import classes from "./FeaturedInfo.module.css";
import { userRequest } from "../../requestMethod";

const FeaturedInfo = () => {
  const [income, setIncome] = useState();
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("/orders/income");
     //   console.log(res);
        setIncome(res && res.data);
        setPerc(
          ((res.data[1].total - res.data[0].total) / res.data[0].total) * 100
        );
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);
  //   console.log(perc);
  //   console.log(income && income[0].total);
  return (
    <div className={classes.featuredInfo}>
      <div className={classes.featuredItem}>
        <span className={classes.featuredTitle}>Revenue</span>
        <div className={classes.featuredMonyContainers}>
          <span className={classes.featuredMony}>
            $ {income && income[1]?.total}
          </span>
          <span className={classes.featuredMonyRate}>
            % {Math.floor(perc)}
            {perc < 0 ? (
              <ArrowDownward
                className={`${classes.featuredIcon} ${classes.negative}`}
              />
            ) : (
              <ArrowUpward className={classes.featuredIcon} />
            )}
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to last month</span>
      </div>

      <div className={classes.featuredItem}>
        <span className={classes.featuredTitle}>Sales</span>
        <div className={classes.featuredMonyContainers}>
          <span className={classes.featuredMony}>$ 4,536</span>{" "}
          <span className={classes.featuredMonyRate}>
            -1.4{" "}
            <ArrowDownward
              className={`${classes.featuredIcon} ${classes.negative}`}
            />
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
