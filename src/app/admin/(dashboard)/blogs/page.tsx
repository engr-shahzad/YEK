import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import DeleteButton from "@/components/admin/DeleteButton";
import type { BlogPostRow } from "@/types/blog";

export default async function AdminBlogsPage() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });

  return (
    <>
      <div className="admin-header-row">
        <div>
          <h1>Blogs</h1>
          <p className="admin-page-subtitle">
            Manage the posts shown on the News page.
          </p>
        </div>
        <Link href="/admin/blogs/new" className="admin-btn admin-btn-primary">
          + New Post
        </Link>
      </div>

      {error && <div className="admin-error">{error.message}</div>}

      <table className="admin-table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Slug</th>
            <th>Published</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(posts as BlogPostRow[] | null)?.map((post) => (
            <tr key={post.id}>
              <td>
                {post.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.image} alt="" className="admin-table-thumb" />
                )}
              </td>
              <td>{post.title}</td>
              <td>{post.category ?? "—"}</td>
              <td>{post.slug}</td>
              <td>{new Date(post.published_at).toLocaleDateString()}</td>
              <td className="admin-table-actions">
                <Link
                  href={`/admin/blogs/${post.id}/edit`}
                  className="admin-btn admin-btn-sm"
                >
                  Edit
                </Link>
                <DeleteButton
                  table="blog_posts"
                  id={post.id}
                  confirmMessage={`Delete "${post.title}"?`}
                />
              </td>
            </tr>
          ))}
          {posts?.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", color: "var(--text)" }}>
                No blog posts yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
