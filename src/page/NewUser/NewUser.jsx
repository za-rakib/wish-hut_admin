import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/Topbar/TopBar";
import classes from "./NewUser.module.css";

export default function NewUser() {
  return (
    <>
    <TopBar/>
    <div className={classes.newUserMain}>
        <Sidebar/>
    <div className={classes.newUser}>
      <h1 className={classes.newUserTitle}>New User</h1>
      <form className={classes.newUserForm}>
        <div className={classes.newUserItem}>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className={classes.newUserItem}>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className={classes.newUserItem}>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className={classes.newUserItem}>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className={classes.newUserItem}>
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className={classes.newUserItem}>
          <label>Address</label>
          <input type="text" placeholder="new York | USA" />
        </div>
        <div className={classes.newUserItem}>
          <label>Gender</label>
          <div className={classes.newUserGender}>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className={classes.newUserItem}>
          <label>Active</label>
          <select className={classes.newUserSelect} name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className={classes.newUserButton}>Create</button>
      </form>
    </div>
    </div>
    </>
  );
}
