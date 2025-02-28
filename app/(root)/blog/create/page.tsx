import BlogForm from "@/components/BlogForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
    const { userId } = await auth()

  if (!userId) redirect("/");

  return (
    <>
      <section className="mx-5">
        <h1 className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-500 rounded-2xl flex items-center justify-center text-white !min-h-[230px] max-w-4xl mx-auto text-2xl mt-5 font-semibold font-mono">
          Compose Your Blog
        </h1>
      </section>

      <BlogForm />
    </>
  );
};

export default Page;