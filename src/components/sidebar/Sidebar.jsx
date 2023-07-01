import "./sidebar.css";
import { useState } from "react";
import { RssFeed } from "@material-ui/icons";
import { Chat } from "@material-ui/icons";
import { PlayCircleFilled } from "@material-ui/icons";
import { Group } from "@material-ui/icons";
import { Bookmark } from "@material-ui/icons";
import { HelpOutline } from "@material-ui/icons";
import { WorkOutline } from "@material-ui/icons";
import { Event } from "@material-ui/icons";
import { School } from "@material-ui/icons";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="sidebarContainer">
      {/* if padding implemented on sidebar
      then it will destroy its flex arrangement hence padding is implemented within wrapper div */}
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group />
            <span className="sidebarListItemText">Groups</span>
          </li>
          {showMore && (
            <>
              <li className="sidebarListItem">
                <Bookmark />
                <span className="sidebarListItemText">Bookmarks</span>
              </li>
              <li className="sidebarListItem">
                <HelpOutline />
                <span className="sidebarListItemText">Questions</span>
              </li>
              <li className="sidebarListItem">
                <WorkOutline />
                <span className="sidebarListItemText">Jobs</span>
              </li>
              <li className="sidebarListItem">
                <Event />
                <span className="sidebarListItemText">Events</span>
              </li>
              <li className="sidebarListItem">
                <School />
                <span className="sidebarListItemText">Courses</span>
              </li>
            </>
          )}
        </ul>
        <button
          className="sidebarButton"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
        <hr className="sidebarHr" /> {/* to add a line */}
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.webp"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Jennifer Lawrence</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="sidebarFriendProfilePic"
            />
            <span className="sidebarFriendName">Eustass Kid</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
