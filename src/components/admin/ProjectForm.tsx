"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ImageUploader, MultiImageUploader } from "./ImageUploader";
import type { ProjectRow } from "@/types/project";

const linesToArray = (text: string) =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

const paragraphsToArray = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

export default function ProjectForm({ project }: { project?: ProjectRow }) {
  const router = useRouter();
  const isEdit = !!project;

  const [slug, setSlug] = useState(project?.slug ?? "");
  const [category, setCategory] = useState(project?.category ?? "");
  const [title, setTitle] = useState(project?.title ?? "");
  const [cardImage, setCardImage] = useState(project?.card_image ?? "");
  const [bannerImage, setBannerImage] = useState(project?.banner_image ?? "");
  const [progress, setProgress] = useState(project?.progress ?? 0);
  const [raised, setRaised] = useState(project?.raised ?? 0);
  const [goal, setGoal] = useState(project?.goal ?? 0);
  const [description, setDescription] = useState(project?.description ?? "");
  const [fullContent, setFullContent] = useState(
    (project?.full_content ?? []).join("\n\n")
  );
  const [goalsIntro, setGoalsIntro] = useState(project?.goals_intro ?? "");
  const [goals, setGoals] = useState((project?.goals ?? []).join("\n"));
  const [contentImages, setContentImages] = useState<string[]>(
    project?.content_images ?? []
  );
  const [sidebarGallery, setSidebarGallery] = useState<string[]>(
    project?.sidebar_gallery ?? []
  );
  const [displayOrder, setDisplayOrder] = useState(project?.display_order ?? 0);

  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const payload = {
      slug: slug.trim(),
      category: category.trim(),
      title: title.trim(),
      card_image: cardImage,
      banner_image: bannerImage,
      progress: Number(progress),
      raised: Number(raised),
      goal: Number(goal),
      description: description.trim() || null,
      full_content: paragraphsToArray(fullContent),
      goals_intro: goalsIntro.trim() || null,
      goals: linesToArray(goals),
      content_images: contentImages,
      sidebar_gallery: sidebarGallery,
      display_order: Number(displayOrder),
    };

    const { error } = isEdit
      ? await supabase.from("projects").update(payload).eq("id", project!.id)
      : await supabase.from("projects").insert(payload);

    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin/projects");
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
            placeholder="e.g. first-aid-emergency-relief"
          />
          <span className="hint">Used in the URL: /project-details/&lt;slug&gt;</span>
        </div>
        <div className="admin-form-group">
          <label>Category</label>
          <input
            className="admin-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            placeholder="e.g. Health, Education, Climate, Leadership"
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
          label="Card Image (project list thumbnail)"
          value={cardImage}
          onChange={setCardImage}
          folder="projects"
        />
        <ImageUploader
          label="Banner Image (details page top)"
          value={bannerImage}
          onChange={setBannerImage}
          folder="projects"
        />

        <div className="admin-form-group">
          <label>Progress (%)</label>
          <input
            className="admin-input"
            type="number"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
          />
        </div>
        <div className="admin-form-group">
          <label>Display Order</label>
          <input
            className="admin-input"
            type="number"
            value={displayOrder}
            onChange={(e) => setDisplayOrder(Number(e.target.value))}
          />
        </div>

        <div className="admin-form-group">
          <label>Raised (Rs.)</label>
          <input
            className="admin-input"
            type="number"
            min={0}
            value={raised}
            onChange={(e) => setRaised(Number(e.target.value))}
          />
        </div>
        <div className="admin-form-group">
          <label>Goal (Rs.)</label>
          <input
            className="admin-input"
            type="number"
            min={0}
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
          />
        </div>

        <div className="admin-form-group full">
          <label>Short Description</label>
          <textarea
            className="admin-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>

        <div className="admin-form-group full">
          <label>Full Content (one paragraph per blank line)</label>
          <textarea
            className="admin-textarea"
            value={fullContent}
            onChange={(e) => setFullContent(e.target.value)}
            rows={8}
          />
        </div>

        <div className="admin-form-group full">
          <label>Goals Intro</label>
          <textarea
            className="admin-textarea"
            value={goalsIntro}
            onChange={(e) => setGoalsIntro(e.target.value)}
            rows={2}
          />
        </div>

        <div className="admin-form-group full">
          <label>Goals (one per line)</label>
          <textarea
            className="admin-textarea"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            rows={4}
          />
        </div>

        <MultiImageUploader
          label="Content Images (shown inside the article body)"
          values={contentImages}
          onChange={setContentImages}
          folder="projects"
        />
        <MultiImageUploader
          label="Sidebar Gallery (project details gallery widget)"
          values={sidebarGallery}
          onChange={setSidebarGallery}
          folder="projects"
        />
      </div>

      <div className="admin-actions-row">
        <button
          type="submit"
          className="admin-btn admin-btn-primary"
          disabled={saving}
        >
          {saving ? "Saving..." : isEdit ? "Save Changes" : "Create Project"}
        </button>
        <button
          type="button"
          className="admin-btn"
          onClick={() => router.push("/admin/projects")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
