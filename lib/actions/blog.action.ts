"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL } from "../utils";

export const getAllBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/blogs`);
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error: any) {
    console.error("Error:", error);
    return { error: error.message };
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    const data = await response.json();
    return data.data[0];
  } catch (error: any) {
    console.error("Error:", error);
    return { error: error.message };
  }
};

export const likePost = async (slug: string) => {
  try {
    // Fetch the current post data
    const res = await fetch(`${BASE_URL}/blogs?filters[slug][$eq]=${slug}`);

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    const post = await res.json();
    const updatedLikes = post.likes + 1; // Increase like count

    // Update the likes count in Strapi
    const updateRes = await fetch(`${BASE_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { likes: updatedLikes } }),
    });

    if (!updateRes.ok) {
      throw new Error("Failed to update likes");
    }

    revalidatePath(`/blogs/${slug}`);
    return { success: true, newLikes: updatedLikes };
  } catch (error:any) {
    console.error("Error updating likes:", error);
    return { success: false, error: error.message };
  }
};