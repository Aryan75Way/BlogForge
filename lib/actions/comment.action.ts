"use server";

import { BASE_URL } from "../utils";

export const createComment = async (
    comment: string,
    postId: number,
    authorId: number
) => {
    try {
      const response = await fetch(`${BASE_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            content: comment,
            blog: postId,
            author: authorId,
          },
        }),
      });
      const data = await response.json();
      console.log("data", data)
      return data;
    } catch (error: any) {
      console.error("Error:", error);
      return { error: error.message };
    }
  }

export const getCommentsOnPost = async (postId:number) => {
    try {
      const response = await fetch(`${BASE_URL}/comments?filters[blog][$eq]=${postId}&populate=*`);
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      console.error("Error:", error);
      return { error: error.message };
    }
}