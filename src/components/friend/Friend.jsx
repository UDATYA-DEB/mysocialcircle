import "./friend.css";
import React from "react";

const Friend = (user) => {
  const { profilePicture, username } = user;
  return (
    <li className="sidebarFriend">
      <img src={profilePicture} alt="" className="sidebarFriendProfilePic" />
      <span className="sidebarFriendName">{username}</span>
    </li>
  );
};

export default Friend;
