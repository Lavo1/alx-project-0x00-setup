import React from "react";
import PostCard from "../../components/common/PostCard";

const Posts: React.FC = () => {
  return (
    <div className="p-8 grid gap-4">
      <PostCard title="First Post" content="This is the first post content." />
      <PostCard title="Second Post" content="This is the second post content." />
    </div>
  );
};

export default Posts;
