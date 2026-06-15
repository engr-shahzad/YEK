import Link from "next/link";
import type { BlogPostRow } from "@/types/blog";

interface SidebarItem {
  type: "search" | "popularPosts" | "categories" | "tags";
  title?: string;
  categories?: {
    name: string;
    count: number;
    link: string;
  }[];
  tags?: {
    name: string;
    link: string;
  }[];
}

const sidebarData: SidebarItem[] = [
  { type: "search", title: "Search" },
  { type: "popularPosts", title: "Popular Feeds" },
  {
    type: "categories",
    title: "Categories",
    categories: [
      { name: "Consultant", count: 23, link: "/news" },
      { name: "Help", count: 24, link: "/news" },
      { name: "Education", count: 11, link: "/news" },
      { name: "Technology", count: 5, link: "/news" },
      { name: "Business", count: 6, link: "/news" },
      { name: "Events", count: 10, link: "/news" },
    ],
  },
  {
    type: "tags",
    title: "Popular Tags",
    tags: [
      { name: "Popular", link: "/news" },
      { name: "design", link: "/news" },
      { name: "education", link: "/news" },
      { name: "usability", link: "/news" },
      { name: "develop", link: "/news" },
      { name: "charity", link: "/news" },
      { name: "community", link: "/news" },
      { name: "climate", link: "/news" },
    ],
  },
];

const BlogSidebar = ({ posts = [] }: { posts?: BlogPostRow[] }) => {
  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        {sidebarData.map((item, index) => {
          switch (item.type) {
            case "search":
              return (
                <div key={index} className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="search_widget">
                    <form action="#">
                      <input type="text" placeholder="Search your keyword..." />
                      <button type="submit">
                        <i className="fal fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              );

            case "popularPosts":
              if (posts.length === 0) return null;
              return (
                <div key={index} className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="popular-posts">
                    {posts.map((post) => (
                      <div key={post.id} className="single-post-item">
                        {post.image && (
                          <div
                            className="thumb bg-cover"
                            style={{ backgroundImage: `url(${post.image})` }}
                          />
                        )}
                        <div className="post-content">
                          <h5>
                            <Link href={`/news/${post.slug}`}>{post.title}</Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />{" "}
                            {new Date(post.published_at).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );

            case "categories":
              return (
                <div key={index} className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="widget_categories">
                    <ul>
                      {item.categories?.map((cat, idx) => (
                        <li key={idx}>
                          <Link href={cat.link}>
                            {cat.name} <span>{cat.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );

            case "tags":
              return (
                <div key={index} className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="tagcloud">
                    {item.tags?.map((tag, idx) => (
                      <Link key={idx} href={tag.link}>
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default BlogSidebar;
