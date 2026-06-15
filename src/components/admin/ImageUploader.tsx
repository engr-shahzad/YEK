"use client";

import { useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

async function uploadImage(file: File, folder: string): Promise<string> {
  const supabase = createClient();
  const ext = file.name.split(".").pop();
  const path = `${folder}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.${ext}`;

  const { error } = await supabase.storage.from("media").upload(path, file);
  if (error) throw error;

  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return data.publicUrl;
}

export function ImageUploader({
  label,
  value,
  onChange,
  folder = "uploads",
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  folder?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const url = await uploadImage(file, folder);
      onChange(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="admin-form-group">
      <label>{label}</label>
      <div className="admin-image-uploader">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="admin-image-preview" />
        ) : (
          <div className="admin-image-preview" />
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <input
            className="admin-input"
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/assets/img/... or upload below"
          />
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          {uploading && <span className="hint">Uploading...</span>}
          {error && <span className="hint" style={{ color: "#c0392b" }}>{error}</span>}
        </div>
      </div>
    </div>
  );
}

export function MultiImageUploader({
  label,
  values,
  onChange,
  folder = "uploads",
}: {
  label: string;
  values: string[];
  onChange: (urls: string[]) => void;
  folder?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        uploaded.push(await uploadImage(file, folder));
      }
      onChange([...values, ...uploaded]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const removeAt = (index: number) => {
    onChange(values.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-form-group full">
      <label>{label}</label>
      {values.length > 0 && (
        <div className="admin-image-gallery">
          {values.map((url, i) => (
            <div className="admin-image-gallery-item" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" />
              <button type="button" onClick={() => removeAt(i)} aria-label="Remove">
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
      />
      {uploading && <span className="hint">Uploading...</span>}
      {error && <span className="hint" style={{ color: "#c0392b" }}>{error}</span>}
    </div>
  );
}
