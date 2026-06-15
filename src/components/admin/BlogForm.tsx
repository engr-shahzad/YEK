"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ImageUploader } from "./ImageUploader";
import type { BlogPostRow } from "@/types/blog";

const paragraphsToArray = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

const toDateInputValue = (iso: string) => iso.slice(0, 10);

export default function BlogForm({ post }: { post?: BlogPostRow }) {
  const router = useRouter();
  const isEdit = !!post;

  const [slug, setSlug] = useState(post?.slug ?? "");
  const [title, setTitle] = useState(post?.title ?? "");
  const [category, setCategory] = useState(post?.category ?? "");
  const [image, setImage] = useState(post?.image ?? "");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [content, setContent] = useState((post?.content ?? []).join("\n\n"));
  const [author, setAuthor] = useState(post?.author ?? "");
  const [authorImage, setAuthorImage] = useState(post?.author_image ?? "");
  const [publishedAt, setPublishedAt] = useState(
    toDateInputValue(post?.published_at ?? new Date().toISOString())
  );

  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const payload = {
      slug: slug.trim(),
      title: title.trim(),
      category: category.trim() || null,
      image: image || null,
      excerpt: excerpt.trim() || null,
      content: paragraphsToArray(content),
      author: author.trim() || null,
      author_image: authorImage || null,
      published_at: new Date(publishedAt).toISOString(),
    };

    const { error } = isEdit
      ? await supabase.from("blog_posts").update(payload).eq("id", post!.id)
      : await supabase.from("blog_posts").insert(payload);

    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin/blogs");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="admin-error">{error}</div>}

      <div className="admin-form-grid">
        <div className="admin-form-group">
          <label>Slug</label>
          <input
            className="admin-input"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            placeholder="e.g. back-to-the-future-quality-education"
          />
          <span className="hint">Used in the URL: /news/&lt;slug&gt;</span>
        </div>
        <div className="admin-form-group">
          <label>Category</label>
          <input
            className="admin-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Charity"
          />
        </div>

        <div className="admin-form-group full">
          <label>Title</label>
          <input
            className="admin-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <ImageUploader
          label="Featured Image"
          value={image}
          onChange={setImage}
          folder="blog"
        />
        <ImageUploader
          label="Author Image"
          value={authorImage}
          onChange={setAuthorImage}
          folder="blog"
        />

        <div className="admin-form-group">
          <label>Author</label>
          <input
            className="admin-input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="admin-form-group">
          <label>Published Date</label>
          <input
            className="admin-input"
            type="date"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
          />
        </div>

        <div className="admin-form-group full">
          <label>Excerpt</label>
          <textarea
            className="admin-textarea"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
          />
        </div>

        <div className="admin-form-group full">
          <label>Content (one paragraph per blank line)</label>
          <textarea
            className="admin-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
          />
        </div>
      </div>

      <div className="admin-actions-row">
        <button
          type="submit"
          className="admin-btn admin-btn-primary"
          disabled={saving}
        >
          {saving ? "Saving..." : isEdit ? "Save Changes" : "Create Post"}
        </button>
        <button
          type="button"
          className="admin-btn"
          onClick={() => router.push("/admin/blogs")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
