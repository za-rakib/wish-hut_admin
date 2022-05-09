import { Link, useParams } from "react-router-dom";
import "./Product.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Publish } from "@material-ui/icons";
import Chart from "../../components/Chart/Chart";
import { updatedProduct } from "../../redux/apiCalls";
import TopBar from "../../components/Topbar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";
import { useDispatch } from "react-redux";
import app from "../../firebase";

export default function Product() {
  const productId = useParams().productId;

  const [pStats, setPStats] = useState([]);
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const [input, setInput] = useState({ product });
  const [file, setFile] = useState(null);

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

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (file) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = { ...input, img: downloadURL };
            updatedProduct(product, productId, dispatch);
          });
        }
      );
    } else {
      const product = { ...input };
      updatedProduct(product, productId, dispatch);
    }
  };
  //  console.log(product);
  //   console.log("file", file);

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
                  <span className="productInfoValue">512</span>
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
                <input
                  name="title"
                  type="text"
                  placeholder={product.title}
                  onChange={handleChange}
                />
                <label>Description</label>
                <input
                  name="desc"
                  type="text"
                  placeholder={product.desc}
                  onChange={handleChange}
                />
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder={product.price}
                  onChange={handleChange}
                />
                <label>In Stock</label>
                <select name="inStock" id="idStock" onChange={handleChange}>
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

                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e?.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
                <button onClick={handleClick} className="productButton">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
