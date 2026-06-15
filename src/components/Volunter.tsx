"use client";

import Image from "next/image";
import type { TeamMemberRow } from "@/types/team";

// ─────────────────────────────────────────────
// REUSABLE: Circle Card
// ─────────────────────────────────────────────
const CircleCard = ({
  image,
  name,
  role,
  linkedin,
  showRole = true,
  size = "lg",
}: {
  image: string;
  name: string;
  role?: string | null;
  linkedin?: string | null;
  showRole?: boolean;
  size?: "lg" | "md" | "sm";
}) => {
  const sizeMap = { lg: 280, md: 250, sm: 220 };
  const px = sizeMap[size];

  return (
    <div className="d-flex flex-column align-items-center gap-2">

      {/* Circle image */}
      <div
        style={{
          width: px,
          height: px,
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #1a5c3a",
          boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Text + LinkedIn */}
      <div className="text-center mt-2">
        <h4 className="mb-0" style={{ fontWeight: 600, fontSize: size === "lg" ? 17 : 15, color: "#1a1a1a" }}>
          {name}
        </h4>

        {showRole && role && (
          <p className="mb-0 mt-1" style={{ fontSize: 13, color: "#666" }}>
            {role}
          </p>
        )}

        {/* LinkedIn button — hover via global CSS class */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-linkedin-btn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        )}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// MAIN: Volunter
// ─────────────────────────────────────────────
export const Volunter = ({
  leadership,
  core,
  community,
}: {
  leadership: TeamMemberRow[];
  core: TeamMemberRow[];
  community: TeamMemberRow[];
}) => {
  const [first, second, third, ...restLeadership] = leadership;

  return (
    <section className="volunter-section fix section-padding">
      <div className="container">

        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h2 className="mt-char-animation">Our Team</h2>
        </div>

        {/* ── LEADERSHIP ── */}
        {leadership.length > 0 && (
          <>
            <h3 className="text-center fw-bold mb-4">Leadership</h3>
            {(second || third) && (
              <div className="d-flex justify-content-center gap-5 flex-wrap mb-5">
                {second && (
                  <CircleCard
                    image={second.image}
                    name={second.name}
                    role={second.role}
                    linkedin={second.linkedin}
                    showRole={second.show_role}
                    size="lg"
                  />
                )}
                {third && (
                  <CircleCard
                    image={third.image}
                    name={third.name}
                    role={third.role}
                    linkedin={third.linkedin}
                    showRole={third.show_role}
                    size="lg"
                  />
                )}
              </div>
            )}
            {first && (
              <div className="d-flex justify-content-center mb-5">
                <CircleCard
                  image={first.image}
                  name={first.name}
                  role={first.role}
                  linkedin={first.linkedin}
                  showRole={first.show_role}
                  size="lg"
                />
              </div>
            )}
            {restLeadership.length > 0 && (
              <div className="row g-4 justify-content-center mb-5">
                {restLeadership.map((m) => (
                  <div key={m.id} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
                    <CircleCard
                      image={m.image}
                      name={m.name}
                      role={m.role}
                      linkedin={m.linkedin}
                      showRole={m.show_role}
                      size="lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ── CORE TEAM ── */}
        {core.length > 0 && (
          <>
            <h3 className="text-center fw-bold mb-4 mt-5">Core Team</h3>
            <div className="row g-4 justify-content-center mb-5">
              {core.map((m) => (
                <div key={m.id} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
                  <CircleCard
                    image={m.image}
                    name={m.name}
                    role={m.role}
                    linkedin={m.linkedin}
                    showRole={m.show_role}
                    size="md"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── COMMUNITY LEADS ── */}
        {community.length > 0 && (
          <>
            <h3 className="text-center fw-bold mb-4 mt-5">Community Leads</h3>
            <div className="row g-4 justify-content-center">
              {community.map((m) => (
                <div key={m.id} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
                  <CircleCard
                    image={m.image}
                    name={m.name}
                    role={m.role}
                    linkedin={m.linkedin}
                    showRole={m.show_role}
                    size="sm"
                  />
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};
