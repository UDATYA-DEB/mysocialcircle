import "./online.css";

const Online = (user) => {
  const { id, profilePicture, username } = user;
  return (
    <li key={id} className="rightbarFriend">
      <div className="rightbarFriendContainer">
        <div className="rightbarFriendImageContainer">
          <img src={profilePicture} alt="" className="rightbarFriendPic" />
          <div className="rightbarFriendOnlineBadge"></div>
        </div>
        <span className="rightbarFriendName">{username}</span>
      </div>
    </li>
  );
};

export default Online;
