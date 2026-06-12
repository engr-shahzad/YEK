"use client";

import { useState, useEffect, useRef } from "react";
import DanboxLayout from "@/layout/DanboxLayout";
import PageBanner from "@/components/PageBanner";


// ─────────────────────────────────────────────
// ADD YOUR PDFs HERE
// PDF ko public/assets/newsletters/ mein rakho
// ─────────────────────────────────────────────
const newsletters = [
  {
    id: 1,
    title: "Bayan e Yaran",
    date: "January 2025",
    pdfUrl: "/assets/Bayaan.pdf",
  },
  // { id: 2, title: "Issue 02", date: "February 2025", pdfUrl: "/assets/newsletters/issue-02.pdf" },
];

// ─────────────────────────────────────────────
// PDF Thumbnail — renders first page on canvas
// ─────────────────────────────────────────────
const PdfThumbnail = ({ pdfUrl }: { pdfUrl: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const render = async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(1);
        if (cancelled || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")!;
        const viewport = page.getViewport({ scale: 1.2 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // ✅ FIX: canvas property added
        await page.render({ canvasContext: ctx, viewport, canvas }).promise;
        if (!cancelled) setLoading(false);
      } catch {
        if (!cancelled) { setError(true); setLoading(false); }
      }
    };
    render();
    return () => { cancelled = true; };
  }, [pdfUrl]);

  return (
    <div className="nl-thumb-inner">
      {(loading || error) && (
        <div className="nl-thumb-fallback">
          {loading && !error && <div className="nl-spinner" />}
          {error && (
            <svg width="56" height="68" viewBox="0 0 56 68" fill="none">
              <rect x="2" y="2" width="44" height="58" rx="4" fill="#fff" stroke="#1a5c3a" strokeWidth="1.5"/>
              <rect x="32" y="2" width="14" height="14" rx="2" fill="#c8e6c9" stroke="#1a5c3a" strokeWidth="1.5"/>
              <path d="M32 2L46 16H32V2Z" fill="#1a5c3a" opacity="0.2"/>
              <line x1="10" y1="24" x2="38" y2="24" stroke="#1a5c3a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              <line x1="10" y1="32" x2="38" y2="32" stroke="#1a5c3a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              <line x1="10" y1="40" x2="26" y2="40" stroke="#1a5c3a" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
            </svg>
          )}
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{ display: loading || error ? "none" : "block", width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────
// PDF Viewer Modal — 80% screen
// ─────────────────────────────────────────────
const PdfModal = ({
  newsletter,
  onClose,
}: {
  newsletter: (typeof newsletters)[0];
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="nl-overlay" onClick={onClose}>
      <div className="nl-modal" onClick={(e) => e.stopPropagation()}>

        {/* Modal Header */}
        <div className="nl-modal-header">
          <div className="nl-modal-meta">
            <div className="nl-modal-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div>
              <p className="nl-modal-date">{newsletter.date}</p>
              <h3 className="nl-modal-title">{newsletter.title}</h3>
            </div>
          </div>
          <div className="nl-modal-actions">
            <a href={newsletter.pdfUrl} download className="nl-download-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </a>
            <button className="nl-close-btn" onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Iframe */}
        <iframe
          src={newsletter.pdfUrl + "#toolbar=1&navpanes=0&scrollbar=1"}
          className="nl-iframe"
          title={newsletter.title}
        />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Newsletter Card — large, beautiful
// ─────────────────────────────────────────────
const NewsletterCard = ({
  newsletter,
  onClick,
}: {
  newsletter: (typeof newsletters)[0];
  onClick: () => void;
}) => (
  <div className="nl-card" onClick={onClick}>
    <div className="nl-thumb">
      <PdfThumbnail pdfUrl={newsletter.pdfUrl} />
      <div className="nl-thumb-overlay">
        <div className="nl-read-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
      </div>
    </div>
    <div className="nl-card-body">
      <div className="nl-card-badge">Newsletter</div>
      <h3 className="nl-card-title">{newsletter.title}</h3>
      <p className="nl-card-date">{newsletter.date}</p>
      <div className="nl-card-footer">
        <button className="nl-card-btn">
          Read Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
const NewsletterPage = () => {
  const [selected, setSelected] = useState<(typeof newsletters)[0] | null>(null);

  return (
    <DanboxLayout>
      <PageBanner pageName="Bayan e Yaran" />
      <style>{`
        @keyframes nl-spin { to { transform: rotate(360deg); } }
        @keyframes nl-fadein { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

        .nl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 32px;
        }

        /* ── Card ── */
        .nl-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid #e4ede7;
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease;
          animation: nl-fadein 0.4s ease both;
        }
        .nl-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(26,92,58,0.13);
        }
        .nl-card:hover .nl-thumb-overlay { opacity: 1; }
        .nl-card:hover .nl-card-btn { background: #1a5c3a; color: #fff; gap: 10px; }

        .nl-thumb {
          position: relative;
          height: 320px;
          background: #f0faf4;
          overflow: hidden;
        }
        .nl-thumb-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nl-thumb-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(160deg, #e8f5e9 0%, #c8e6c9 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nl-spinner {
          width: 36px; height: 36px;
          border: 3px solid #1a5c3a33;
          border-top-color: #1a5c3a;
          border-radius: 50%;
          animation: nl-spin 0.75s linear infinite;
        }
        .nl-thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,92,58,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .nl-read-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 2px solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
        }

        .nl-card-body {
          padding: 22px 24px 24px;
        }
        .nl-card-badge {
          display: inline-block;
          background: #e8f5e9;
          color: #1a5c3a;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
        }
        .nl-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0 0 6px;
          line-height: 1.3;
        }
        .nl-card-date {
          font-size: 13px;
          color: #999;
          margin: 0 0 18px;
        }
        .nl-card-footer { display: flex; align-items: center; justify-content: space-between; }
        .nl-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          border-radius: 24px;
          border: 1.5px solid #1a5c3a;
          background: transparent;
          color: #1a5c3a;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, gap 0.2s;
        }

        /* ── Modal / Overlay ── */
        .nl-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(8px);
          animation: nl-fadein 0.2s ease;
        }
        .nl-modal {
          background: #fff;
          border-radius: 20px;
          width: 80vw;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.4);
        }
        .nl-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid #eee;
          flex-shrink: 0;
        }
        .nl-modal-meta { display: flex; align-items: center; gap: 14px; }
        .nl-modal-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: #e8f5e9;
          color: #1a5c3a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nl-modal-date { margin: 0; font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 0.06em; }
        .nl-modal-title { margin: 3px 0 0; font-size: 17px; font-weight: 700; color: #111; }
        .nl-modal-actions { display: flex; align-items: center; gap: 10px; }
        .nl-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          border: 1.5px solid #1a5c3a;
          background: transparent;
          color: #1a5c3a;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .nl-download-btn:hover { background: #1a5c3a; color: #fff; }
        .nl-close-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #f5f5f5;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          transition: background 0.2s;
        }
        .nl-close-btn:hover { background: #fee2e2; color: #ef4444; }
        .nl-iframe {
          flex: 1;
          border: none;
          width: 100%;
        }
      `}</style>

      <section className="section-padding pb-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title color-2 wow fadeInUp">
              <i className="far fa-heart" />
              Our Newsletter
            </span>
            <h2 className="mt-char-animation">What is Bayan e Yaran?</h2>
          </div>
          <p className="text-center" style={{ maxWidth: 720, margin: "0 auto" }}>
            Bayan e Yaran ("Voice of Friends") is Yaran e Khair&apos;s community newsletter,
            sharing updates from our Bazm-e-Yaran sessions, programme highlights, and stories
            from the communities we work with across Lower Chitral, Upper Chitral, and Garam
            Chashma. Browse our latest issue below — new editions are added here as they are
            published.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "#f7fbf8" }}>
        <div className="container">
          <div className="nl-grid">
            {newsletters.map((nl) => (
              <NewsletterCard key={nl.id} newsletter={nl} onClick={() => setSelected(nl)} />
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <PdfModal newsletter={selected} onClose={() => setSelected(null)} />
      )}
    </DanboxLayout>
  );
};

export default NewsletterPage;