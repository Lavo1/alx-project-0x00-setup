import React from "react";

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-semibold text-xl mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
