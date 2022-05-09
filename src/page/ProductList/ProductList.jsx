import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "../../components/Topbar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.product.products);
  //console.log(product);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
    // setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
       // console.log("params",params);
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <TopBar />
      <div className="productListMain">
        <Sidebar />
        <div className="productList">
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            getRowId={(row) => row._id}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
