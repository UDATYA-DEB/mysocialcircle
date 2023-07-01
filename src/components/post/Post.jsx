import "./post.css";
import { MoreVert } from "@material-ui/icons";
const Post = (post) => {
  const { username, desc, photo, date, like, comment, profilePicture } = post;
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={profilePicture} alt="" className="postTopProfilePic" />
            <span className="postTopName">{username}</span>
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
            <img src="./assets/like.png" alt="" className="postLike" />
            <img src="./assets/heart.png" alt="" className="postLike" />
            <span className="postBottomText">{like} people like it</span>
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
