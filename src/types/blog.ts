export type BlogPostRow = {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  image: string | null;
  excerpt: string | null;
  content: string[];
  author: string | null;
  author_image: string | null;
  published_at: string;
  created_at: string;
};
