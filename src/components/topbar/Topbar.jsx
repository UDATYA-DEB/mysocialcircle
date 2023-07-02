import "./topbar.css";
import { Search } from "@material-ui/icons";
import { Person } from "@material-ui/icons";
import { Message } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MySocialCircle</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search style={{ fontSize: "20px", marginLeft: "10px" }} />
          <input
            type="text"
            placeholder="Search for friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinkContainer">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIconContainer">
          <div className="topbarIconItem">
            <Person style={{ color: "white" }} />
            <span className="topbarIconItemBadge">10</span>
          </div>
          <div className="topbarIconItem">
            <Message style={{ color: "white" }} />
            <span className="topbarIconItemBadge">10</span>
          </div>
          <div className="topbarIconItem">
            <Notifications style={{ color: "white" }} />
            <span className="topbarIconItemBadge">10</span>
          </div>
        </div>
        <img
          src="./assets/person/2jl.jpg"
          alt=""
          className="topbarProfilePic"
        />
      </div>
    </div>
  );
};

export default Topbar;
