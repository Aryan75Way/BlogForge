import BlogCard from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";
import Header from "@/components/shared/Header";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const posts = [
    {
      _createdAt: "2025-02-28T10:00:00Z",
      views: 120,
      author: "John Doe",
      title: "Understanding Next.js with Strapi",
      category: "Web Development",
      _id: "post_1",
      image: "https://example.com/image1.jpg",
      description: "A deep dive into integrating Next.js with Strapi for a seamless blog experience.",
    },
    {
      _createdAt: "2025-02-27T15:30:00Z",
      views: 85,
      author: "Jane Smith",
      title: "Why Strapi is the Best Headless CMS",
      category: "Content Management",
      _id: "post_2",
      image: "https://example.com/image2.jpg",
      description: "An overview of Strapi's features and why developers love it for building headless CMS solutions.",
    },
    {
      _createdAt: "2025-02-26T08:45:00Z",
      views: 200,
      author: "Alice Johnson",
      title: "SEO Optimization in Next.js",
      category: "SEO",
      _id: "post_3",
      image: "https://example.com/image3.jpg",
      description: "Learn how to optimize your Next.js site for search engines with best practices and tools.",
    },
  ];
  

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
          {posts?.length > 0 ? (
            posts.map((post: any) => (
              <BlogCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No projects found</p>
          )}
        </ul>
      </section>
    </>
  );
}