import React from "react";
import classes from "./Home.module.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import WidgetSm from "../../components/Widgets/WidgetSm/WidgetSm";
import WidgetLg from "../../components/Widgets/WidgetLg/WidgetLg";
import { userData } from "../../assets/data/dummyData";


const Home = () => {
  return (
    <div className={classes.home}>
      <FeaturedInfo />
      <Chart
        data={userData }
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className={classes.homeWidgets}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
