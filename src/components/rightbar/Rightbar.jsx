import "./rightbar.css";
import { Users } from "../../dummyData";
import { useState } from "react";

const Rightbar = () => {
  const [users, setUsers] = useState(Users);

  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
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
          {users.map((friend) => {
            const { id, profilePicture, username } = friend;
            return (
              <li key={id} className="rightbarFriend">
                <div className="rightbarFriendContainer">
                  <div className="rightbarFriendImageContainer">
                    <img
                      src={profilePicture}
                      alt=""
                      className="rightbarFriendPic"
                    />
                    <div className="rightbarFriendOnlineBadge"></div>
                  </div>
                  <span className="rightbarFriendName">{username}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
