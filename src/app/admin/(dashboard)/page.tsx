import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AdminHomePage() {
  const supabase = await createClient();

  const [{ count: projectCount }, { count: teamCount }, { count: blogCount }] =
    await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase.from("team_members").select("*", { count: "exact", head: true }),
      supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    ]);

  const cards = [
    { label: "Projects", count: projectCount ?? 0, href: "/admin/projects", cta: "Manage Projects" },
    { label: "Team Members", count: teamCount ?? 0, href: "/admin/team", cta: "Manage Team" },
    { label: "Blog Posts", count: blogCount ?? 0, href: "/admin/blogs", cta: "Manage Blogs" },
  ];

  return (
    <>
      <h1>Dashboard</h1>
      <p className="admin-page-subtitle">
        Manage the content shown on the Yaran e Khair website.
      </p>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {cards.map((card) => (
          <div className="admin-card" style={{ minWidth: 220 }} key={card.href}>
            <p style={{ margin: "0 0 4px", fontSize: 13, color: "var(--text)" }}>
              {card.label}
            </p>
            <p style={{ margin: "0 0 16px", fontSize: 32, fontWeight: 500 }}>
              {card.count}
            </p>
            <Link href={card.href} className="admin-btn admin-btn-primary">
              {card.cta}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
