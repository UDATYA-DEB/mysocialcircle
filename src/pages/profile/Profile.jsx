import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState } from "react";

const Profile = () => {
  const [isProfile, setIsProfile] = useState(true);
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightCover">
              <img
                src="./assets/post/3.jpg"
                alt=""
                className="profileRightCoverImg"
              />
              <img
                src="./assets/person/2jl.jpg"
                alt=""
                className="profileRightProfileImg"
              />
            </div>
            <div className="profileRightInfo">
              <h4 className="profileRightUname">Jennifer Lawrence</h4>
              <span className="profileRightDesc">
                Brightest day in the blackest night.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar isProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
