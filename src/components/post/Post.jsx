import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
const Post = (post) => {
  const [users, setUsers] = useState(Users);
  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const { userId, desc, photo, date, like, comment } = post;

  const handleLike = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={users.filter((user) => user.id === userId)[0].profilePicture}
              alt=""
              className="postTopProfilePic"
            />
            <span className="postTopName">
              {users.filter((user) => user.id === userId)[0].username}
            </span>
            <span className="postTopTime">{date}...</span>
          </div>
          <MoreVert style={{ cursor: "pointer" }} />
        </div>
        <div className="postMiddle">
          <span className="postMiddleText">{desc}</span>
          <img src={photo} alt="" className="postMiddleImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="./assets/like.png"
              alt=""
              className="postLike"
              onClick={handleLike}
            />
            <img
              src="./assets/heart.png"
              alt=""
              className="postLike"
              onClick={handleLike}
            />
            <span className="postBottomText">{likes} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
