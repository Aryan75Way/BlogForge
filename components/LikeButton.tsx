"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import { likePost } from "@/lib/actions/blog.action";

const LikeButton = ({ slug }: { slug: string }) => {
  const [liked, setLiked] = useState(false);

  const handleLikePost = async () => {
    await likePost(slug);
    setLiked(true);
  };

  return (
    <button
      onClick={handleLikePost}
      disabled={liked}
      className={`cursor-pointer`}
    >
      <Heart fill={liked ? "red" : ""} />
    </button>
  );
};

export default LikeButton;
