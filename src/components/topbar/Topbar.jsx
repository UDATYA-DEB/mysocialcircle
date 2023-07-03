import "./topbar.css";
import { Search } from "@material-ui/icons";
import { Person } from "@material-ui/icons";
import { Message } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";

const Topbar = () => {
  const firebase = useFirebase();
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MySocialCircle</span>
        </Link>
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
        <Link to={"/myprofile"} onDoubleClick={firebase.handleSignOut}>
          <img
            src="./assets/person/2jl.jpg"
            alt=""
            className="topbarProfilePic"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
