import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/Topbar/TopBar";
import classes from "./NewAdmin.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";

export default function NewUser() {
  const [adminFormData, setAdminFormData] = useState({ isAdmin: true });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAdminFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, adminFormData);
  };
  //console.log("adminFormData", adminFormData);
  return (
    <>
      <TopBar />
      <div className={classes.newUserMain}>
        <Sidebar />
        <div className={classes.newUser}>
          <h1 className={classes.newUserTitle}>New Admin</h1>
          <form className={classes.newUserForm}>
            <div className={classes.newUserItem}>
              <label>Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="John Smith"
                onChange={handleChange}
              />
            </div>
            <div className={classes.newUserItem}>
              <label>Username</label>
              <input
                name="userName"
                type="text"
                placeholder="john"
                onChange={handleChange}
              />
            </div>

            <div className={classes.newUserItem}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className={classes.newUserItem}>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            {/* <div className={classes.newUserItem}>
          <label>Gender</label>
          <div className={classes.newUserGender}>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
            {/* <div className={classes.newUserItem}>
              <label>Is Admin</label>
              <select
                name="isAdmin"
                className={classes.newUserSelect}
                onChange={handleChange}
              >
                {" "}
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div> */}
            <button onClick={handleClick} className={classes.newUserButton}>
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
