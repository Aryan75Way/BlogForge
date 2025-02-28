"use server";

import { BASE_URL } from "../utils";

export const getAllBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/blogs`);
    const data = await response.json();
    console.log(data.data)
    return data.data;
  } catch (error: any) {
    console.error("Error:", error);
    return { error: error.message };
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${BASE_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`);
    const data = await response.json();
    return data.data[0];
  } catch (error: any) {
    console.error("Error:", error);
    return { error: error.message };
  }
};
