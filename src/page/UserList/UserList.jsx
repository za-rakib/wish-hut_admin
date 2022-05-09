import React, { useEffect } from "react";
import classes from "./UserList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import TopBar from "../../components/Topbar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/apiCalls";

const UserList = () => {
//   const [data, setData] = useState(userRows);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
      console.log("id",id);
    deleteUser(id, dispatch);
  };

 const users =  useSelector((state) => state.user.users);
 //console.log(users);

  useEffect(() => {
    getUsers(dispatch);
  },[dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "userName",
      headerName: "User Name",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className={classes.userListUser}>
            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
         // console.log(params);
        return (
          <>
            <Link to={`/user/${params.row._id}`}>
              <button className={classes.userListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={classes.userListDelete}
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </DeleteOutline>
          </>
        );
      },
    },
  ];

  return (
    <>
      <TopBar />
      <div className={classes.userListMain}>
        <Sidebar />
        <div className={classes.userList}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={8}
            getRowId={(row) => row._id}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </>
  );
};

export default UserList;
