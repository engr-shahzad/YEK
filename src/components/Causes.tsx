"use client";
import Image from "next/image";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import causesData from "@/data/causes.json";

// ─── Types ───────────────────────────────────────────────────────────────────

type CauseList = {
  category: string;
  image: string;
  title: string;
  progress: number;
  raised: number;
  goal: number;
  author: string;
  delay: string;
};

type CauseFull = {
  id: number;
  slug: string;
  list: CauseList;
  details: {
    category: string;
    bannerImage: string;
    title: string;
    progress: number;
    raised: number;
    goal: number;
    description: string;
    fullContent: string[];
    goals: string[];
    contentImages: string[];
    sidebarGallery: string[];
  };
};

// ─── Shared Card ─────────────────────────────────────────────────────────────

const CausesCard = ({
  slug,
  delay,
  image,
  title,
  progress,
  raised,
  goal,
}: {
  slug: string;
  delay: string;
  image: string;
  title: string;
  progress: number;
  raised: number;
  goal: number;
}) => (
  <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={delay}>
    <div className="causes-box-items box-shadow">
      <div
        className="causes-image bg-cover"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="cause-content">
        <h4>
          <Link href={`/project-details/${slug}`}>{title}</Link>
        </h4>
  
 
      </div>
    </div>
  </div>
);

export const CausesTab = () => {
  const allCauses = causesData as CauseFull[];

  const tabs = [
    { key: "all", label: "All Categories", delay: ".3s" },
    { key: "Education", label: "Education", delay: ".5s" },
    { key: "Health", label: "Health", delay: ".7s" },
    { key: "Climate", label: "Climate", delay: ".9s" },
    { key: "Leadership", label: "Leadership", delay: "1.1s" },
  ];

  const getFiltered = (key: string) =>
    key === "all"
      ? allCauses
      : allCauses.filter((c) => c.list.category === key);

  return (
    <section className="causes-section fix section-padding fix">
      <div className="container">
        <Tab.Container defaultActiveKey="all">
          <div className="cuases-tab-header">
            <Nav as="ul" className="nav mb-4" role="tablist">
              {tabs.map((tab) => (
                <Nav.Item
                  key={tab.key}
                  as="li"
                  className="nav-item wow fadeInUp"
                  data-wow-delay={tab.delay}
                  role="presentation"
                >
                  <Nav.Link eventKey={tab.key} className="nav-link">
                    {tab.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>

          <Tab.Content className="tab-content">
            {tabs.map((tab) => (
              <Tab.Pane key={tab.key} eventKey={tab.key} className="tab-pane fade">
                <div className="row">
                  {getFiltered(tab.key).map((cause) => (
                    <CausesCard
                      key={cause.id}
                      slug={cause.slug}
                      delay={cause.list.delay}
                      image={cause.list.image}
                      title={cause.list.title}
                      progress={cause.list.progress}
                      raised={cause.list.raised}
                      goal={cause.list.goal}
                    />
                  ))}
                </div>
              </Tab.Pane>
            ))}

            {/* <div className="page-nav-wrap mt-5 text-center">
              <ul>
                <li>
                  <a className="page-numbers" href="#">
                    <i className="fal fa-long-arrow-left" />
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    01
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    02
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    ..
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    10
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </li>
              </ul>
            </div> */}
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};
