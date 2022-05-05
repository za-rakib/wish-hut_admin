import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/Topbar/TopBar";
import classes from "./User.module.css";

export default function User() {
  return (
    <>
    <TopBar/>
    <div className={classes.userMain}>
        <Sidebar/>
    <div className={classes.user}>
      <div className={classes.userTitleContainer}>
        <h1 className={classes.userTitle}>Edit User</h1>
        <Link to="/newUser">
          <button className={classes.userAddButton}>Create</button>
        </Link>
      </div>
      <div className={classes.userContainer}>
        <div className={classes.userShow}>
          <div className={classes.userShowTop}>
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={classes.userShowImg}
            />
            <div className={classes.userShowTopTitle}>
              <span className={classes.userShowUsername}>Anna Becker</span>
              <span className={classes.userShowUserTitle}>
                Software Engineer
              </span>
            </div>
          </div>
          <div className={classes.userShowBottom}>
            <span className={classes.userShowTitle}>Account Details</span>
            <div className={classes.userShowInfo}>
              <PermIdentity className={classes.userShowIcon} />
              <span className={classes.userShowInfoTitle}>annabeck99</span>
            </div>
            <div className={classes.userShowInfo}>
              <CalendarToday className={classes.userShowIcon} />
              <span className={classes.userShowInfoTitle}>10.12.1999</span>
            </div>
            <span className={classes.userShowTitle}>Contact Details</span>
            <div className={classes.userShowInfo}>
              <PhoneAndroid className={classes.userShowIcon} />
              <span className={classes.userShowInfoTitle}>+1 123 456 67</span>
            </div>
            <div className={classes.userShowInfo}>
              <MailOutline className={classes.userShowIcon} />
              <span className={classes.userShowInfoTitle}>
                annabeck99@gmail.com
              </span>
            </div>
            <div className={classes.userShowInfo}>
              <LocationSearching className={classes.userShowIcon} />
              <span className={classes.userShowInfoTitle}>New York | USA</span>
            </div>
          </div>
        </div>
        <div className={classes.userUpdate}>
          <span className={classes.userUpdateTitle}>Edit</span>
          <form className={classes.userUpdateForm}>
            <div className={classes.userUpdateLeft}>
              <div className={classes.userUpdateItem}>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className={classes.userUpdateInput}
                />
              </div>
              <div className={classes.userUpdateItem}>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className={classes.userUpdateInput}
                />
              </div>
              <div className={classes.userUpdateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className={classes.userUpdateInput}
                />
              </div>
              <div className={classes.userUpdateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className={classes.userUpdateInput}
                />
              </div>
              <div className={classes.userUpdateItem}>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className={classes.userUpdateInput}
                />
              </div>
            </div>
            <div className={classes.userUpdateRight}>
              <div className={classes.userUpdateUpload}>
                <img
                  className={classes.userUpdateImg}
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label for="file">
                  <Publish className={classes.userUpdateIcon} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className={classes.userUpdateButton}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
