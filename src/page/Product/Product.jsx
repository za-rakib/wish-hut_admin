import { Link, useParams } from "react-router-dom";
import "./Product.css";

import { Publish } from "@material-ui/icons";
import Chart from "../../components/Chart/Chart";

import TopBar from "../../components/Topbar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function Product() {
  const productId = useParams().productId;

  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

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
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(`/orders/income?pid=${productId}`);
         // console.log("res",res);
        res.data.map((item) =>
          setPStats((prev) => [
            ...prev,
            {
              name: MONTH[item._id - 1],
              sales: item.total,
            },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTH, productId]);
 // console.log("pStats", pStats);
  return (
    <>
      <TopBar />
      <div className="productMain">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={pStats}
                dataKey="sales"
                title="Sales Performance"
                xis="name"
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product.img} alt="" className="productInfoImg" />
                <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id: </span>
                  <span className="productInfoValue">{product._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">sales:</span>
                  <span className="productInfoValue">5123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">in stock:</span>
                  <span className="productInfoValue">
                    {product.inStock.toString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder={product.title} />
                <label>Description</label>
                <input type="text" placeholder={product.desc} />
                <label>Price</label>
                <input type="text" placeholder={product.price} />
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src={product.img} alt="" className="productUploadImg" />
                  <label htmlFor="file">
                    <Publish />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
