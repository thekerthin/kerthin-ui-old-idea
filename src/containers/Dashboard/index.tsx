import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import Post from "../../components/Post";

const Dashboard = () => {
  const posts = useSelector((state: any) => state.posts, shallowEqual);

  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      {posts.map((post: any, index: number) => (
        <Post key={`post_${index}`} {...post} />
      ))}
    </div>
  );
};

export default Dashboard;
