import "./rightbar.css";
import { Users } from "../../dummyData";
import { useState } from "react";
import Online from "../online/Online";

const Rightbar = ({ isProfile }) => {
  const [users, setUsers] = useState(Users);

  const ProfileRightbar = () => {
    return (
      <>
        <div className="profileRightbarTop">
          <h2 className="profileRightbarTitle">User information</h2>
          <div className="profileInfoContainer">
            <span className="profileInfoTitle">City: </span>
            <span className="profileInfoDesc">New York</span>
          </div>
          <div className="profileInfoContainer">
            <span className="profileInfoTitle">From: </span>
            <span className="profileInfoDesc">Madrid</span>
          </div>
          <div className="profileInfoContainer">
            <span className="profileInfoTitle">Relationship: </span>
            <span className="profileInfoDesc">Married</span>
          </div>
        </div>
        <div className="profileRightbarBottom">
          <h2 className="profileRightbarTitle">
            User friends ({users.length})
          </h2>
          <div className="profileRightbarFollowings">
            {users.map((user) => {
              const { profilePicture, username } = user;
              return (
                <div className="profileRightbarFollowing">
                  <img
                    src={profilePicture}
                    alt=""
                    className="profileRightbarFollowingPic"
                  />
                  <span className="profileRightbarFollowingUname">
                    {username}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <img src="./assets/ad.png" alt="" className="rightbarAdv" />
      </>
    );
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbarBirthday">
          <img src="./assets/gift.png" alt="" className="birthdayLogo" />
          <span className="rightbarBirthdayText">
            <b>Jennifer Lawrence</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="./assets/ad.png" alt="" className="rightbarAdv" />
        <h4 className="rightbarFriendListTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map((user) => {
            return <Online key={user.id} {...user} />;
          })}
        </ul>
      </>
    );
  };

  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {isProfile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
