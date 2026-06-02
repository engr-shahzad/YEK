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
  {
    name: "Samavia Khan",
    role: "Co lead of Bayan e Yaran.",
    image: "/assets/img/Co Founder/sma.jpg",
    linkedin: "#",
  },
];

// ─────────────────────────────────────────────
// CORE TEAM  (sirf naam — no role)
// ─────────────────────────────────────────────
const coreTeamData = [
  { name: "Haadi Butt",          image: "/assets/img/Core Team/Haadi Butt/Haadi Butt.png",                   linkedin: "#" },
  { name: "Joao Machado Velado", image: "/assets/img/Core Team/Joao Machado Velado Neto/Joao Machado Velado Neto.png", linkedin: "#" },
  { name: "Naila Sarwar",        image: "/assets/img/Core Team/Naila Sarwar/Naila Sarwar.png",               linkedin: "#" },
  { name: "Naveera Taj",         image: "/assets/img/Core Team/Naveera Taj/Naveera Taj.png",                 linkedin: "#" },
  { name: "Shaukat Ali",         image: "/assets/img/Core Team/Shaukat Ali/Shaukat Ali.png",                 linkedin: "#" },
  { name: "Wasim Iqbal",         image: "/assets/img/Core Team/Wasim Iqbal/Wasim Iqbal.png",                 linkedin: "#" },
  { name: "Zia Ullah",           image: "/assets/img/Core Team/Zia Ullah/Zia Ullah.png",                     linkedin: "#" },
];

// ─────────────────────────────────────────────
// COMMUNITY LEADS  (naam + title dono)
// ─────────────────────────────────────────────
const communityLeadsData = [
  { name: "Aziz Karim",   role: "Community Coordinator",     image: "/assets/img/Community Coordinator/Aziz Karim/Aziz Karim (2).png",  linkedin: "#" },
  { name: "Aniqa Sher",   role: "President Gilgit Wing",     image: "/assets/img/Gilgit Wing/President Gilgit Wing/Aniqa Sher.png",  linkedin: "https://www.linkedin.com/in/aniqa-sher-00b6b6336?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
{ name: "Zeeshan Wali",   role: "Vice President Gilgit Wing",     image: "/assets/img/Gilgit Wing/Vice President Gilgit Wing/Zeeshan Wali.png",  linkedin: "https://www.linkedin.com/in/zeeshan-wali-6455b9361/" },
{ name: "Shehram Ahmad",   role: "President Chitral Wing",     image: "/assets/img/Chitral Wing/President Chitral Wing/shehram Ahmad.png",  linkedin: "https://www.linkedin.com/in/shehram-ahmad-16b317367/" },
{ name: "Muhammad Abdullah Farid",   role: "Vice President Chitral Wing (Lower)",     image: "/assets/img/Chitral Wing/Vice President Chitral Wing (Lower)/Muhammad Abdullah Farid.png",  linkedin: "http://linkedin.com/in/muhammad-abdullah-farid-38a12b2a0" },
{ name: "Aliya Jabeen",   role: "Vice President Chitral Wing (Upper)",     image: "/assets/img/Chitral Wing/Vice President Chitral Wing (Upper)/Aliya Jabeen.png",  linkedin: "#" },
{ name: "Fizza Khan",   role: "Lead Life on Land Project",     image: "/assets/img/Lead Life on Land Project/Fizza Khan.png",  linkedin: "https://pk.linkedin.com/in/fizza-khan-043689246" },
{ name: "Niba Ali",   role: "Co Lead Life on Land Project",     image: "/assets/img/Lead Life on Land Project/Niba Ali.png",  linkedin: "#" },
{ name: "Kamran Qurban",   role: "Lead Climate Action GB",     image: "/assets/img/Community Leads/Climate Action/climate action lead gb/Kamran Qurban.png",  linkedin: "#" },
{ name: "Saqlain Ahmed",   role: "Lead Climate Action Chitral",     image: "/assets/img/Climate Action/Lead Climate Action lead chitral Project/Saqlain Ahmed.png",  linkedin: "#" },
{ name: "Naghma Hamid",   role: "Co Lead Climate Action Chitral",     image: "/assets/img/Community Leads/Climate Action/Co-lead Climate Action chitral/Naghma Hamid.png",  linkedin: "https://www.linkedin.com/in/naghma-hamid-111madaklasht" },
{ name: "Aleena Yousuf",   role: "Lead Bayan e Yaran",     image: "/assets/img/Chitral Wing/TBD.png",  linkedin: "https://www.linkedin.com/in/aleenayousuf44?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
{ name: "TBD",   role: "Lead Archival Project",     image: "/assets/img/Chitral Wing/TBD.png",  linkedin: "#" },
{ name: "TBD",   role: "Co Lead Archival Project",     image: "/assets/img/Chitral Wing/TBD.png",  linkedin: "#" },
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