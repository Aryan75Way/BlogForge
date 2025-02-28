import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from "markdown-it";
import Header from "@/components/shared/Header";
import { getBlogBySlug } from "@/lib/actions/blog.action";

const md = markdownit();

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  
  // const post = {
  //   _createdAt: "2025-02-28T10:00:00Z",
  //   views: 120,
  //   author: {
  //       _id:"1",
  //       image:"",
  //       name:"john",
  //       username:"johndoe"
  //   },
  //   title: "Understanding Next.js with Strapi",
  //   category: "Web Development",
  //   _id: "post_1",
  //   image: "https://example.com/image1.jpg",
  //   description: "A deep dive into integrating Next.js with Strapi for a seamless blog experience.",
  //   content:"**Hello World**"
  // }

  console.log(slug);
  const post = await getBlogBySlug(slug);
  console.log(post)

  if (!post) return notFound();

  const parsedContent = md.render(post?.content || "");

  return (
    <>
      <Header heading={post.title} subHeading={formatDate(post?.createdAt)}>
        <h2 className="max-w-4xl mx-auto font-work-sans tracking-tight italic px-5 text-center">
          {post.description}
        </h2>
      </Header>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center bg-sky-500 rounded-xl p-10 max-w-4xl mx-auto">
          <Image
            src={post.image}
            alt="thumbnail"
            width={800}
            height={400}
            className="w-4/5 rounded-xl"
          />
        </div>

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-5 pb-4">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center"
            >
              <Image
                src={post.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-lg font-medium">{post.author.name}</p>
                <p className="text-sm font-light">@{post.author.username}</p>
              </div>
            </Link>

            <p className="text-[16px] bg-secondary px-4 py-2 rounded-full font-mono">
              {post.category}
            </p>
          </div>

          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        <hr className="border-dashed max-w-4xl my-10 mx-auto" />
      </section>
    </>
  );
};

export default Page;