export type ProjectRow = {
  id: string;
  slug: string;
  category: string;
  title: string;
  card_image: string;
  banner_image: string;
  progress: number;
  raised: number;
  goal: number;
  description: string | null;
  full_content: string[];
  goals_intro: string | null;
  goals: string[];
  content_images: string[];
  sidebar_gallery: string[];
  display_order: number;
  created_at: string;
};
