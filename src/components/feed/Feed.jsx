import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
import { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState(Posts);
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
