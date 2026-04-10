"use client";

import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// LEADERSHIP  (1 center → 2 center below)
// ─────────────────────────────────────────────
const leadershipData = [
  {
    name: "Fehmeeda Kalsoom",
    role: "Community Manager",
    image: "/assets/img/volunter/Fehmeeda.png",
    linkedin: "https://www.linkedin.com/in/fehmeedakalsoom1209?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },

  {
    name: "Sarir Ahmad",
    role: "Founder & CEO",
    image: "/assets/img/Founder and CEO/Sarir Ahmad.png",
    linkedin: "https://linkedin.com/in/sarir-ahmad",
  },
  {
    name: "Shah Sarbaz",
    role: "Co-Founder",
    image: "/assets/img/Co Founder/Shah Sarbaz.png",
    linkedin: "https://linkedin.com/in/shah-sarbaz",
  },
];

// ─────────────────────────────────────────────
// CORE TEAM  (sirf naam — no role)
// ─────────────────────────────────────────────
const coreTeamData = [
  { name: "Haadi Butt",          image: "/assets/img/Core Team/Haadi Butt/Haadi Butt.png",                   linkedin: "https://www.linkedin.com/in/haadi-butt-485b81277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "Joao Machado Velado Neto", image: "/assets/img/Core Team/Joao Machado Velado Neto/Joao Machado Velado Neto.png", linkedin: "#" },
  { name: "Naila Sarwar",        image: "/assets/img/Core Team/Naila Sarwar/Naila Sarwar.png",               linkedin: "https://www.linkedin.com/in/naila-sarwar?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { name: "Naveera Taj",         image: "/assets/img/Core Team/Naveera Taj/Naveera Taj.png",                 linkedin: "https://www.linkedin.com/in/naveera-taj-60b68b262?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Shaukat Ali",         image: "/assets/img/Core Team/Shaukat Ali/Shaukat Ali.png",                 linkedin: "https://www.instagram.com/shouk_aly?igsh=Z2s5MXFmaWhxMXFw" },
  { name: "Wasim Iqbal",         image: "/assets/img/Core Team/Wasim Iqbal/Wasim Iqbal.png",                 linkedin: "#" },
  { name: "Zia Ullah",           image: "/assets/img/Core Team/Zia Ullah/Zia Ullah.png",                     linkedin: "http://linkedin.com/in/zia-ullah-b392292a3" },
];

// ─────────────────────────────────────────────
// COMMUNITY LEADS  (naam + title dono)
// ─────────────────────────────────────────────
const communityLeadsData = [
  { name: "Aziz Karim",   role: "Community Coordinator",     image: "/assets/img/volunter/lead1.jpg",  linkedin: "#" },

];

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
  role?: string;
  linkedin?: string;
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
        <h5 className="mb-0" style={{ fontWeight: 600, fontSize: size === "lg" ? 17 : 15 }}>
          <Link href="/team-details" style={{ color: "#1a1a1a", textDecoration: "none" }}>
            {name}
          </Link>
        </h5>

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
export const Volunter = () => {
  const [leader1, leader2, leader3] = leadershipData;

  return (
    <section className="volunter-section fix section-padding">
      <div className="container">

        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h2 className="mt-char-animation">Our Team</h2>
        </div>

        {/* ── LEADERSHIP ── */}
   
        <div className="d-flex justify-content-center gap-5 flex-wrap mb-5">
          <CircleCard {...leader2} size="lg" />
          <CircleCard {...leader3} size="lg" />
        </div>
        <div className="d-flex justify-content-center mb-5">
          <CircleCard {...leader1} size="lg" />
        </div>
        {/* ── CORE TEAM ── */}
        <h3 className="text-center fw-bold mb-4 mt-5">Core Team</h3>
        <div className="row g-4 justify-content-center mb-5">
          {coreTeamData.map((m, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
              <CircleCard {...m} showRole={false} size="md" />
            </div>
          ))}
        </div>

        {/* ── COMMUNITY LEADS ── */}
        <h3 className="text-center fw-bold mb-4 mt-5">Community Leads</h3>
        <div className="row g-4 justify-content-center">
          {communityLeadsData.map((m, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
              <CircleCard {...m} showRole={true} size="sm" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// VolunteersPage
// ─────────────────────────────────────────────
export const VolunteersPage = () => {
  const [leader1, leader2, leader3] = leadershipData;

  return (
    <section className="volunter-section fix section-padding">
      <div className="container">

        <div className="d-flex justify-content-center mb-5">
          <CircleCard {...leader1} size="lg" />
        </div>
        <div className="d-flex justify-content-center gap-5 flex-wrap mb-5">
          <CircleCard {...leader2} size="lg" />
          <CircleCard {...leader3} size="lg" />
        </div>

        <h3 className="text-center fw-bold mb-4 mt-5">Core Team</h3>
        <div className="row g-4 justify-content-center mb-5">
          {coreTeamData.map((m, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
              <CircleCard {...m} showRole={false} size="md" />
            </div>
          ))}
        </div>

        <h3 className="text-center fw-bold mb-4 mt-5">Community Leads</h3>
        <div className="row g-4 justify-content-center">
          {communityLeadsData.map((m, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
              <CircleCard {...m} showRole={true} size="sm" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};