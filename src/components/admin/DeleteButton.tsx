"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DeleteButton({
  table,
  id,
  confirmMessage = "Are you sure you want to delete this item?",
}: {
  table: string;
  id: string;
  confirmMessage?: string;
}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm(confirmMessage)) return;
    setDeleting(true);
    const supabase = createClient();
    const { error } = await supabase.from(table).delete().eq("id", id);
    setDeleting(false);
    if (error) {
      window.alert(`Failed to delete: ${error.message}`);
      return;
    }
    router.refresh();
  };

  return (
    <button
      className="admin-btn admin-btn-danger admin-btn-sm"
      onClick={handleDelete}
      disabled={deleting}
    >
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
}
