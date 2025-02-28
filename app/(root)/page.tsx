import BlogCard from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";
import Header from "@/components/shared/Header";
import { getAllBlogs } from "@/lib/actions/blog.action";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  
  const posts = await getAllBlogs();

  return (
    <>
      <Header
        heading="BlogForge"
        subHeading="Write for others, Learn from others 🚀"
      >
        <SearchForm query={query} />
      </Header>

      <section className="section_container">
        <p className="text-3xl font-semibold">
          {query ? (
            <>
              Search Results for{" "}
              <span className="italic font-medium">{query}</span>
            </>
          ) : (
            <>All Blogs</>
          )}
        </p>

        <ul className="mt-7 card_grid">
          {posts && posts?.length > 0 ? (
            posts.map((post: any) => (
              <BlogCard key={post?.id} post={post} />
            ))
          ) : (
            <p>No projects found</p>
          )}
        </ul>
      </section>
    </>
  );
}