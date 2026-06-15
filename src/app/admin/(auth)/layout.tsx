import "../admin.css";

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="admin-body admin-auth-wrap">{children}</div>;
}
