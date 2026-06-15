"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ImageUploader } from "./ImageUploader";
import type { TeamMemberRow, TeamSection } from "@/types/team";

export default function TeamForm({ member }: { member?: TeamMemberRow }) {
  const router = useRouter();
  const isEdit = !!member;

  const [section, setSection] = useState<TeamSection>(member?.section ?? "leadership");
  const [name, setName] = useState(member?.name ?? "");
  const [role, setRole] = useState(member?.role ?? "");
  const [image, setImage] = useState(member?.image ?? "");
  const [linkedin, setLinkedin] = useState(member?.linkedin ?? "");
  const [showRole, setShowRole] = useState(member?.show_role ?? true);
  const [displayOrder, setDisplayOrder] = useState(member?.display_order ?? 0);

  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const payload = {
      section,
      name: name.trim(),
      role: role.trim() || null,
      image,
      linkedin: linkedin.trim() || null,
      show_role: showRole,
      display_order: Number(displayOrder),
    };

    const { error } = isEdit
      ? await supabase.from("team_members").update(payload).eq("id", member!.id)
      : await supabase.from("team_members").insert(payload);

    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin/team");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="admin-error">{error}</div>}

      <div className="admin-form-grid">
        <div className="admin-form-group">
          <label>Section</label>
          <select
            className="admin-select"
            value={section}
            onChange={(e) => setSection(e.target.value as TeamSection)}
          >
            <option value="leadership">Leadership</option>
            <option value="core">Core Team</option>
            <option value="community">Community Leads</option>
          </select>
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
          <label>Name</label>
          <input
            className="admin-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="admin-form-group">
          <label>Role / Title</label>
          <input
            className="admin-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Founder & CEO"
          />
        </div>

        <ImageUploader
          label="Photo"
          value={image}
          onChange={setImage}
          folder="team"
        />

        <div className="admin-form-group">
          <label>LinkedIn URL</label>
          <input
            className="admin-input"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className="admin-form-group admin-checkbox-row">
          <input
            type="checkbox"
            id="show_role"
            checked={showRole}
            onChange={(e) => setShowRole(e.target.checked)}
          />
          <label htmlFor="show_role">Show role/title on the team page</label>
        </div>
      </div>

      <div className="admin-actions-row">
        <button
          type="submit"
          className="admin-btn admin-btn-primary"
          disabled={saving}
        >
          {saving ? "Saving..." : isEdit ? "Save Changes" : "Create Team Member"}
        </button>
        <button
          type="button"
          className="admin-btn"
          onClick={() => router.push("/admin/team")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
