import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/Topbar/TopBar";
import classes from "./User.module.css";
import { useSelector } from "react-redux";

export default function User() {
  // const location = new useLocation();
  // const id = location.pathname.split("/")[2];

  const userId = useParams().userId;
  //   console.log("id", userId);
  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );
 //console.log("user", user);
 
  return (
    <>
      <TopBar />
      <div className={classes.userMain}>
        <Sidebar />
        <div className={classes.user}>
          <div className={classes.userTitleContainer}>
            <h1 className={classes.userTitle}>Edit User</h1>
            <Link to="/newAdmin">
              <button className={classes.userAddButton}>Add Admin</button>
            </Link>
          </div>
          <div className={classes.userContainer}>
            <div className={classes.userShow}>
              <div className={classes.userShowTop}>
                <div className={classes.userShowTopTitle}>
                  <span className={classes.userShowUsername}>{user.userName}</span>
                  {/* <span className={classes.userShowUserTitle}>
                    Software Engineer
                  </span> */}
                </div>
              </div>
              <div className={classes.userShowBottom}>
                <span className={classes.userShowTitle}>Account Details</span>
                <div className={classes.userShowInfo}>
                  <PermIdentity className={classes.userShowIcon} />
                  <span className={classes.userShowInfoTitle}>{user.userName}</span>
                </div>
                <div className={classes.userShowInfo}>
                  <CalendarToday className={classes.userShowIcon} />
                  <span className={classes.userShowInfoTitle}>{user.createdAt.toString().split('T')[0]}</span>
                 
                </div>
                <span className={classes.userShowTitle}>Contact Details</span>
                <div className={classes.userShowInfo}>
                  <PhoneAndroid className={classes.userShowIcon} />
                  <span className={classes.userShowInfoTitle}>
                    +1 123 456 67
                  </span>
                </div>
                <div className={classes.userShowInfo}>
                  <MailOutline className={classes.userShowIcon} />
                  <span className={classes.userShowInfoTitle}>
                    {user.email}
                  </span>
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
                      placeholder= {user.userName}
                      className={classes.userUpdateInput}
                    />
                  </div>
                
                  <div className={classes.userUpdateItem}>
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder= {user.email}
                      className={classes.userUpdateInput}
                    />
                  </div>
                
                  {/* <div className={classes.userUpdateItem}>
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="New York | USA"
                      className={classes.userUpdateInput}
                    />
                  </div> */}
                </div>
                <div>
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
