import React, { useEffect, useState, useMemo  } from "react";
import classes from "./Home.module.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import WidgetSm from "../../components/Widgets/WidgetSm/WidgetSm";
import WidgetLg from "../../components/Widgets/WidgetLg/WidgetLg";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/Topbar/TopBar";
import { userRequest } from "../../requestMethod";

const Home = () => {
  const [userState, setUserState] = useState([]);
  const MONTH = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(()=>{
      const getStats= async()=>{
          try{
              const res= await userRequest.get("/users/stats");
            //  console.log("res",res);
            res.data.map((item)=>
            setUserState((prev)=>[...prev,{
                name:MONTH[item._id-1],
                "Active Users":item.total,
            }])
            )
          }
          catch{}
      }
      getStats();
  },[MONTH])
// console.log("userState",userState);

  
  return (
    <>
      <TopBar />
      <div className={classes.homeMain}>
        <Sidebar />
        <div className={classes.home}>
          <FeaturedInfo />
          <Chart
            data={userState}
            title="User Analytics"
            grid
            xis="name"
            dataKey="Active Users"
          />
          <div className={classes.homeWidgets}>
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
