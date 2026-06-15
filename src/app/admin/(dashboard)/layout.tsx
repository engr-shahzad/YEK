import "../admin.css";
import { createClient } from "@/lib/supabase/server";
import AdminSidebar from "@/components/admin/AdminSidebar";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div className="admin-body admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo">Yaran e Khair Admin</div>
        <AdminSidebar />
        <div className="admin-sidebar-footer">
          <p className="admin-user-email">{data.user?.email}</p>
          <LogoutButton />
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
