"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { createComment } from "@/lib/actions/comment.action";

const Comment = ({postId, authorId}:{
    postId: number;
    authorId: number;
}) => {
    const [comment, setComment] = useState("");
    const handleSubmitComment = async() => {
        await createComment(comment, postId, authorId);
    }
  return (
    <>
    <Textarea
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    />
    <Button className="bg-secondary w-full text-primary mt-2" onClick={handleSubmitComment}>Submit</Button>
    </>


  )
}

export default Comment
