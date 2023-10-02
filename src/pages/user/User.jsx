import {
  CalendarToday,
  LocationSearchingOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./user.scss";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="user">
      <div className="titleContainer">
        <h1>Edit User</h1>
        <Link to="/newUser">
          <button>Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="text">
              <span className="name">Anna Becker</span>
              <span className="title">Software Engineer</span>
            </div>
          </div>
          <div className="bottom">
            <span className="userTitle">Account Details</span>
            <div className="info">
              <PermIdentity className="icon" />
              <span className="infoTitle">@annabeck99</span>
            </div>
            <div className="info">
              <CalendarToday className="icon" />
              <span className="infoTitle">10.12.1999</span>
            </div>
            <span className="userTitle">Contact Details</span>
            <div className="info">
              <PhoneAndroid className="icon" />
              <span className="infoTitle">+1 234 567 899</span>
            </div>
            <div className="info">
              <MailOutline className="icon" />
              <span className="infoTitle">anna@email.com</span>
            </div>
            <div className="info">
              <LocationSearchingOutlined className="icon" />
              <span className="infoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="updateTitle">Edit</span>
          <form>
            <div className="updateLeft">
              <div className="updateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="@annabeck99"
                  className="usernameInput"
                />
              </div>
              <div className="updateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="usernameInput"
                />
              </div>
              <div className="updateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="anna@email.com"
                  className="usernameInput"
                />
              </div>
              <div className="updateItem">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 234 567 899"
                  className="usernameInput"
                />
              </div>
              <div className="updateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="usernameInput"
                />
              </div>
            </div>
            <div className="updateRight">
              <div className="userUpload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
