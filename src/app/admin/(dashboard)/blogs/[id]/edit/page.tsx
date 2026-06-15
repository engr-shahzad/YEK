import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import BlogForm from "@/components/admin/BlogForm";
import type { BlogPostRow } from "@/types/blog";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) notFound();

  return (
    <>
      <h1>Edit Blog Post</h1>
      <p className="admin-page-subtitle">{post.title}</p>
      <BlogForm post={post as BlogPostRow} />
    </>
  );
}
