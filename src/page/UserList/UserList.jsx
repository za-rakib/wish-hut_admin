import React, { useState } from "react";
import classes from "./UserList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../assets/data/dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userName",
      headerName: "User Name",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className={classes.userListUser}>
            <img
              className={classes.userListImage}
              src={params.row.avatar}
              alt=""
            />
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
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "transition",
      headerName: "Transition",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className={classes.userListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={classes.userListDelete}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </DeleteOutline>
          </>
        );
      },
    },
  ];

  return (
    <div className={classes.userList}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
