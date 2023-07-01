import "./share.css";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@material-ui/icons";

const Share = () => {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="./assets/person/1.jpg" alt="" className="shareProfilePic" />
          <input
            type="text"
            placeholder="What's in your mind ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareItems">
            <div className="shareItem">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareItemText">Photo or Video</span>
            </div>
            <div className="shareItem">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareItemText">Tags</span>
            </div>
            <div className="shareItem">
              <LocationOn htmlColor="green" className="shareIcon" />
              <span className="shareItemText">Location</span>
            </div>
            <div className="shareItem">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareItemText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
