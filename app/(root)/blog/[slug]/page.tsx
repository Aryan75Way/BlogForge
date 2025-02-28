import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from "markdown-it";
import Header from "@/components/shared/Header";
import { getBlogBySlug, likePost } from "@/lib/actions/blog.action";
import LikeButton from "@/components/LikeButton";
import Comment from "@/components/Comment";
import AllComments from "@/components/AllComments";

const md = markdownit();

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const post = await getBlogBySlug(slug);

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
                width={48}
                height={48}
                className="rounded-full drop-shadow-lg"
              />

                <p className="text-lg font-medium">{post.author.name}</p>
            </Link>

            <div className="flex items-center gap-2">
              <LikeButton
              slug={post.slug}
              />
            <p className="text-[16px] px-2 py-2 rounded-full font-mono">
              {post.likes}
            </p>
            </div>
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

        <Comment
        postId={post.id}
        authorId={post.author.id}
        />

        <AllComments
        postId={post.id}
        />
      </section>
    </>
  );
};

export default Page;