import type { Metadata } from "next";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import Link from "next/link";
import { createClient } from "@/lib/supabase/public";
import type { BlogPostRow } from "@/types/blog";

export const metadata: Metadata = {
  title: "News",
};

const NewsPage = async () => {
  const supabase = createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });

  const blogPosts = (posts as BlogPostRow[]) ?? [];

  return (
    <DanboxLayout>
      <PageBanner pageName="News Feeds" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-posts">
                {blogPosts.map((post) => (
                  <div className="single-blog-post" key={post.id}>
                    {post.image && (
                      <div
                        className="post-featured-thumb bg-cover"
                        style={{
                          backgroundImage: `url(${post.image})`,
                        }}
                      />
                    )}
                    <div className="post-content">
                      {post.category && (
                        <div className="post-cat">
                          <Link href="/news">{post.category}</Link>
                        </div>
                      )}
                      <h2>
                        <Link href={`/news/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          {new Date(post.published_at).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      {post.excerpt && <p>{post.excerpt}</p>}
                      <div className="d-flex justify-content-between align-items-center mt-30">
                        {post.author && (
                          <div className="author-info">
                            {post.author_image && (
                              <div
                                className="author-img bg-cover"
                                style={{
                                  backgroundImage: `url(${post.author_image})`,
                                }}
                              />
                            )}
                            <h5>
                              <span>by {post.author}</span>
                            </h5>
                          </div>
                        )}
                        <div className="post-link">
                          <Link href={`/news/${post.slug}`}>
                            <i className="fal fa-arrow-right" /> Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {blogPosts.length === 0 && (
                  <p className="text-center">No news posts yet.</p>
                )}
              </div>
            </div>
            <BlogSidebar posts={blogPosts.slice(0, 4)} />
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default NewsPage;
