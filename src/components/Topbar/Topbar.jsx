import "./topbar.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="topLeft">
          <h1 className="logo">Creative Dashboard</h1>
        </div>
        <div className="topRight">
          <div className="iconsContainer">
            <NotificationsNoneIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="iconsContainer">
            <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="iconsContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
