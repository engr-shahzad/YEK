import { createClient } from "@supabase/supabase-js";
import causesData from "../src/data/causes.json";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type CauseFull = {
  id: number;
  slug: string;
  list: {
    category: string;
    image: string;
    title: string;
    progress: number;
    raised: number;
    goal: number;
  };
  details: {
    bannerImage: string;
    title: string;
    progress: number;
    raised: number;
    goal: number;
    description: string;
    fullContent: string[];
    goalsIntro: string;
    goals: string[];
    contentImages: string[];
    sidebarGallery: string[];
  };
};

async function seedProjects() {
  const causes = causesData as CauseFull[];

  const rows = causes.map((cause, index) => ({
    slug: cause.slug,
    category: cause.list.category,
    title: cause.details.title,
    card_image: cause.list.image,
    banner_image: cause.details.bannerImage,
    progress: cause.details.progress,
    raised: cause.details.raised,
    goal: cause.details.goal,
    description: cause.details.description,
    full_content: cause.details.fullContent,
    goals_intro: cause.details.goalsIntro,
    goals: cause.details.goals,
    content_images: cause.details.contentImages,
    sidebar_gallery: cause.details.sidebarGallery,
    display_order: index,
  }));

  const { error } = await supabase
    .from("projects")
    .upsert(rows, { onConflict: "slug" });

  if (error) {
    console.error("Failed to seed projects:", error.message);
    process.exit(1);
  }

  console.log(`Seeded/updated ${rows.length} project(s).`);
}

// ─────────────────────────────────────────────
// Team members
// ─────────────────────────────────────────────

const leadershipData = [
  {
    name: "Fehmeeda Kalsoom",
    role: "Community Manager",
    image: "/assets/img/volunter/Fehmeeda.png",
    linkedin:
      "https://www.linkedin.com/in/fehmeedakalsoom1209?utm_source=share_via&utm_content=profile&utm_medium=member_android",
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

const coreTeamData = [
  { name: "Haadi Butt", image: "/assets/img/Core Team/Haadi Butt/Haadi Butt.png", linkedin: "#" },
  { name: "Joao Machado Velado", image: "/assets/img/Core Team/Joao Machado Velado Neto/Joao Machado Velado Neto.png", linkedin: "#" },
  { name: "Naila Sarwar", image: "/assets/img/Core Team/Naila Sarwar/Naila Sarwar.png", linkedin: "#" },
  { name: "Naveera Taj", image: "/assets/img/Core Team/Naveera Taj/Naveera Taj.png", linkedin: "#" },
  { name: "Shaukat Ali", image: "/assets/img/Core Team/Shaukat Ali/Shaukat Ali.png", linkedin: "#" },
  { name: "Wasim Iqbal", image: "/assets/img/Core Team/Wasim Iqbal/Wasim Iqbal.png", linkedin: "#" },
  { name: "Zia Ullah", image: "/assets/img/Core Team/Zia Ullah/Zia Ullah.png", linkedin: "#" },
];

const communityLeadsData = [
  { name: "Aziz Karim", role: "Community Coordinator", image: "/assets/img/Community Coordinator/Aziz Karim/Aziz Karim (2).png", linkedin: "#" },
  { name: "Aniqa Sher", role: "President Gilgit Wing", image: "/assets/img/Gilgit Wing/President Gilgit Wing/Aniqa Sher.png", linkedin: "https://www.linkedin.com/in/aniqa-sher-00b6b6336?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { name: "Zeeshan Wali", role: "Vice President Gilgit Wing", image: "/assets/img/Gilgit Wing/Vice President Gilgit Wing/Zeeshan Wali.png", linkedin: "https://www.linkedin.com/in/zeeshan-wali-6455b9361/" },
  { name: "Shehram Ahmad", role: "President Chitral Wing", image: "/assets/img/Chitral Wing/President Chitral Wing/shehram Ahmad.png", linkedin: "https://www.linkedin.com/in/shehram-ahmad-16b317367/" },
  { name: "Muhammad Abdullah Farid", role: "Vice President Chitral Wing (Lower)", image: "/assets/img/Chitral Wing/Vice President Chitral Wing (Lower)/Muhammad Abdullah Farid.png", linkedin: "http://linkedin.com/in/muhammad-abdullah-farid-38a12b2a0" },
  { name: "Aliya Jabeen", role: "Vice President Chitral Wing (Upper)", image: "/assets/img/Chitral Wing/Vice President Chitral Wing (Upper)/Aliya Jabeen.png", linkedin: "#" },
  { name: "Fizza Khan", role: "Lead Life on Land Project", image: "/assets/img/Lead Life on Land Project/Fizza Khan.png", linkedin: "https://pk.linkedin.com/in/fizza-khan-043689246" },
  { name: "Niba Ali", role: "Co Lead Life on Land Project", image: "/assets/img/Lead Life on Land Project/Niba Ali.png", linkedin: "#" },
  { name: "Kamran Qurban", role: "Lead Climate Action GB", image: "/assets/img/Community Leads/Climate Action/climate action lead gb/Kamran Qurban.png", linkedin: "#" },
  { name: "Saqlain Ahmed", role: "Lead Climate Action Chitral", image: "/assets/img/Climate Action/Lead Climate Action lead chitral Project/Saqlain Ahmed.png", linkedin: "#" },
  { name: "Naghma Hamid", role: "Co Lead Climate Action Chitral", image: "/assets/img/Community Leads/Climate Action/Co-lead Climate Action chitral/Naghma Hamid.png", linkedin: "https://www.linkedin.com/in/naghma-hamid-111madaklasht" },
];

async function seedTeamMembers() {
  const rows = [
    ...leadershipData.map((m, index) => ({
      section: "leadership" as const,
      name: m.name,
      role: m.role,
      image: m.image,
      linkedin: m.linkedin,
      show_role: true,
      display_order: index,
    })),
    ...coreTeamData.map((m, index) => ({
      section: "core" as const,
      name: m.name,
      role: null,
      image: m.image,
      linkedin: m.linkedin,
      show_role: false,
      display_order: index,
    })),
    ...communityLeadsData.map((m, index) => ({
      section: "community" as const,
      name: m.name,
      role: m.role,
      image: m.image,
      linkedin: m.linkedin,
      show_role: true,
      display_order: index,
    })),
  ];

  const { error: deleteError } = await supabase
    .from("team_members")
    .delete()
    .gte("display_order", 0);

  if (deleteError) {
    console.error("Failed to clear team_members:", deleteError.message);
    process.exit(1);
  }

  const { error } = await supabase.from("team_members").insert(rows);

  if (error) {
    console.error("Failed to seed team_members:", error.message);
    process.exit(1);
  }

  console.log(`Seeded ${rows.length} team member(s).`);
}

// ─────────────────────────────────────────────
// Blog posts
// ─────────────────────────────────────────────

async function seedBlogPosts() {
  const rows = [
    {
      slug: "save-the-childrens-role-in-fight-against-malnutrition-hailed",
      title: "Save the Children's Role in Fight Against Malnutrition Hailed",
      category: "Charity",
      image: "/assets/img/news/post1.jpg",
      excerpt:
        "With the cargo business blasting, financier firms are bouncing from organization to organization quickly, prompting high paces of turnover. Regularly, agents are beginning the work with the...",
      content: [
        "With the cargo business blasting, financier firms are bouncing from organization to organization quickly, prompting high paces of turnover. Regularly, agents are beginning the work with the...",
      ],
      author: "Hetmayar",
      author_image: "/assets/img/news/author_img.jpg",
      published_at: "2024-03-24T00:00:00Z",
    },
    {
      slug: "back-to-the-future-quality-education-through",
      title: "Back to the future: Quality education through.",
      category: "Charity",
      image: "/assets/img/news/post2.jpg",
      excerpt:
        "We commit ourselves to complete all projects within the timeline set with our honorable clients. ex ea commodo consequat. We have a proven record of best result of building and reputable company in the United States.",
      content: [
        "We have a proven record of best result of building and reputable company in the United States. Thousands of successful projects we are one of the most trusted construction companies. We have a proven record of best result of building and reputable company in the United States.",
        "Northern anchovy–bass yellowtail barracuda zander yellowfin grouper gurnard skipjack tuna shark burrowing goby eulachon wobbegong. Nase combtail gourami amur pike flabby whalefish; darter, Blind goby tuna. Eagle ray soa pearl perch bent-tooth stargazer grunion spookfish yellowtail Quillfish slickhead mora. snake worm mackerel sockeye salmon banjo catfish toadfish sauger four-eyed fish",
        "This shortage is being seen in both the airline and the cargo industries. With such a small pool of applicants to choose from, these two sectors are battling to get the most qualified available candidates. Many pilots are increasingly being wooed to get behind the controls of passenger planes over cargo flights—frankly, it's tough to compete with jobs perks like fixed schedules and free flights for your family across the world.",
      ],
      author: "Hetmayar",
      author_image: "/assets/img/news/author_img.jpg",
      published_at: "2024-07-17T00:00:00Z",
    },
    {
      slug: "condolences-to-families-effected-by-flash-floods",
      title: "Condolences to Families Effected By Flash Floods",
      category: "Charity",
      image: "/assets/img/news/post3.jpg",
      excerpt:
        "We commit ourselves to complete all projects within the timeline set with our honorable clients. ex ea commodo consequat. We have a proven record of best result of building and reputable company in the United States.",
      content: [
        "We commit ourselves to complete all projects within the timeline set with our honorable clients. ex ea commodo consequat. We have a proven record of best result of building and reputable company in the United States.",
      ],
      author: "Hetmayar",
      author_image: "/assets/img/news/author_img.jpg",
      published_at: "2024-07-17T00:00:00Z",
    },
    {
      slug: "take-care-of-the-elderly-without-home",
      title: "Take Care Of The Elderly Without Home.",
      category: "Charity",
      image: "/assets/img/news/post4.jpg",
      excerpt:
        "We have a proven record of best result of building and reputable company in the United States. Thousands of successful projects we are one of the most trusted construction companies. We have a proven record of best result of building and reputable company in the United States.",
      content: [
        "We have a proven record of best result of building and reputable company in the United States. Thousands of successful projects we are one of the most trusted construction companies. We have a proven record of best result of building and reputable company in the United States.",
      ],
      author: "Hetmayar",
      author_image: "/assets/img/news/author_img.jpg",
      published_at: "2024-03-24T00:00:00Z",
    },
  ];

  const { error } = await supabase
    .from("blog_posts")
    .upsert(rows, { onConflict: "slug" });

  if (error) {
    console.error("Failed to seed blog_posts:", error.message);
    process.exit(1);
  }

  console.log(`Seeded/updated ${rows.length} blog post(s).`);
}

async function main() {
  await seedProjects();
  await seedTeamMembers();
  await seedBlogPosts();
}

main();
