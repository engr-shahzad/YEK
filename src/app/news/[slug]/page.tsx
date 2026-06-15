import type { Metadata } from "next";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/public";
import type { BlogPostRow } from "@/types/blog";

export async function generateStaticParams() {
  const supabase = createClient();
  const { data } = await supabase.from("blog_posts").select("slug");
  return (data ?? []).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title")
    .eq("slug", slug)
    .single();

  return {
    title: post ? post.title : "Post Not Found",
  };
}

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const supabase = createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!post) notFound();

  const details = post as BlogPostRow;

  const { data: otherPosts } = await supabase
    .from("blog_posts")
    .select("*")
    .neq("slug", slug)
    .order("published_at", { ascending: false })
    .limit(4);

  return (
    <DanboxLayout>
      <PageBanner pageName="News Details" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-post-details border-wrap">
                <div className="single-blog-post post-details">
                  <div className="post-content">
                    {details.category && (
                      <div className="post-cat">
                        <Link href="/news">{details.category}</Link>
                      </div>
                    )}
                    <h2>{details.title}</h2>
                    <div className="post-meta">
                      <span>
                        <i className="fal fa-calendar-alt" />
                        {new Date(details.published_at).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      {details.author && (
                        <span>
                          <i className="fal fa-user" />
                          {details.author}
                        </span>
                      )}
                    </div>

                    {details.image && (
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ height: "auto", width: "100%" }}
                        src={details.image}
                        alt={details.title}
                      />
                    )}

                    {details.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="row tag-share-wrap">
                  <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end ms-auto">
                    <h4>Social Share</h4>
                    <div className="social-share">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>

                {otherPosts && otherPosts.length > 0 && (
                  <div className="comments-section-wrap pt-40">
                    <div className="comments-heading">
                      <h3>More Posts</h3>
                    </div>
                    <ul className="checked-list">
                      {(otherPosts as BlogPostRow[]).map((p) => (
                        <li key={p.id}>
                          <Link href={`/news/${p.slug}`}>{p.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <BlogSidebar posts={(otherPosts as BlogPostRow[]) ?? []} />
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default NewsDetailsPage;
