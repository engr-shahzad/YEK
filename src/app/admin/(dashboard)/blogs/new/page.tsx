import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPostPage() {
  return (
    <>
      <h1>New Blog Post</h1>
      <p className="admin-page-subtitle">Add a new post to the News page.</p>
      <BlogForm />
    </>
  );
}
