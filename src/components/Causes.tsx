"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import type { ProjectRow } from "@/types/project";

// ─── Shared Card ─────────────────────────────────────────────────────────────

const CausesCard = ({
  slug,
  delay,
  image,
  title,
}: {
  slug: string;
  delay: string;
  image: string;
  title: string;
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

const DELAYS = [".3s", ".5s", ".7s", ".9s", "1.1s"];

export const CausesTab = ({ projects }: { projects: ProjectRow[] }) => {
  const tabs = [
    { key: "all", label: "All Categories", delay: ".3s" },
    { key: "Education", label: "Education", delay: ".5s" },
    { key: "Health", label: "Health", delay: ".7s" },
    { key: "Climate", label: "Climate", delay: ".9s" },
    { key: "Leadership", label: "Leadership", delay: "1.1s" },
  ];

  const getFiltered = (key: string) =>
    key === "all" ? projects : projects.filter((p) => p.category === key);

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
                  {getFiltered(tab.key).map((project, i) => (
                    <CausesCard
                      key={project.id}
                      slug={project.slug}
                      delay={DELAYS[i % DELAYS.length]}
                      image={project.card_image}
                      title={project.title}
                    />
                  ))}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};
